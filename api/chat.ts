type KnowledgeChunk = {
  id: string;
  title: string;
  text: string;
  tags: string[];
};

type Body = {
  message?: string;
  lang?: "en" | "fr";
  chunks?: KnowledgeChunk[];
};

type VercelReq = {
  method?: string;
  body?: Body | string;
};

type VercelRes = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => VercelRes;
  json: (body: unknown) => void;
  end: () => void;
};

type ProviderResult = {
  answer: string | null;
  provider?: string;
  reason?: string;
  detail?: string;
};

const systemPrompt = (lang: "en" | "fr") =>
  lang === "fr"
    ? `Tu es l'assistante du portfolio de Rim Belabadia (AI & Software Engineer).
Réponds uniquement à partir du CONTEXTE fourni (contenu du site).
Sois concise (4-8 phrases max), professionnelle, chaleureuse.
Si l'info manque, dis-le clairement et propose la section Contact.
N'invente pas d'expérience, diplômes, ni chiffres hors contexte.`
    : `You are the portfolio assistant for Rim Belabadia (AI & Software Engineer).
Answer only from the provided CONTEXT (site content).
Be concise (4-8 sentences max), professional, warm.
If information is missing, say so clearly and suggest the Contact section.
Do not invent experience, credentials, or numbers outside the context.`;

const buildUserPrompt = (message: string, chunks: KnowledgeChunk[]) => {
  const context = chunks
    .map((chunk, i) => `[${i + 1}] ${chunk.title}\n${chunk.text}`)
    .join("\n\n");
  return `CONTEXT:\n${context || "(empty)"}\n\nQUESTION:\n${message}`;
};

async function chatCompletions(
  url: string,
  apiKey: string | undefined,
  model: string,
  lang: "en" | "fr",
  message: string,
  chunks: KnowledgeChunk[]
): Promise<{ ok: boolean; answer: string | null; detail?: string }> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt(lang) },
        { role: "user", content: buildUserPrompt(message, chunks) },
      ],
    }),
  });

  if (!response.ok) {
    return { ok: false, answer: null, detail: await response.text() };
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  return {
    ok: true,
    answer: data.choices?.[0]?.message?.content?.trim() || null,
  };
}

async function chatOllama(
  baseUrl: string,
  model: string,
  lang: "en" | "fr",
  message: string,
  chunks: KnowledgeChunk[]
): Promise<{ ok: boolean; answer: string | null; detail?: string }> {
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      stream: false,
      options: { temperature: 0.2, num_predict: 500 },
      messages: [
        { role: "system", content: systemPrompt(lang) },
        { role: "user", content: buildUserPrompt(message, chunks) },
      ],
    }),
  });

  if (!response.ok) {
    return { ok: false, answer: null, detail: await response.text() };
  }

  const data = (await response.json()) as {
    message?: { content?: string };
  };
  return { ok: true, answer: data.message?.content?.trim() || null };
}

/** Prefer Groq (fast) → OpenAI → Ollama (local / self-hosted). */
async function resolveAnswer(
  message: string,
  lang: "en" | "fr",
  chunks: KnowledgeChunk[]
): Promise<ProviderResult> {
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const result = await chatCompletions(
        "https://api.groq.com/openai/v1/chat/completions",
        groqKey,
        process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        lang,
        message,
        chunks
      );
      if (result.ok && result.answer) {
        return { answer: result.answer, provider: "groq" };
      }
      if (!result.ok) {
        // fall through
      }
    } catch {
      // fall through
    }
  }

  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      const result = await chatCompletions(
        "https://api.openai.com/v1/chat/completions",
        openaiKey,
        process.env.OPENAI_MODEL || "gpt-4o-mini",
        lang,
        message,
        chunks
      );
      if (result.ok && result.answer) {
        return { answer: result.answer, provider: "openai" };
      }
    } catch {
      // fall through
    }
  }

  const ollamaBase =
    process.env.OLLAMA_BASE_URL ||
    (process.env.VERCEL ? "" : "http://127.0.0.1:11434");
  if (ollamaBase) {
    try {
      const result = await chatOllama(
        ollamaBase,
        process.env.OLLAMA_MODEL || "llama3.2:1b",
        lang,
        message,
        chunks
      );
      if (result.ok && result.answer) {
        return { answer: result.answer, provider: "ollama" };
      }
      return {
        answer: null,
        reason: "ollama_error",
        detail: result.detail,
      };
    } catch (error) {
      return {
        answer: null,
        reason: "ollama_unreachable",
        detail: error instanceof Error ? error.message : "unknown",
      };
    }
  }

  return { answer: null, reason: "missing_provider" };
}

export default async function handler(req: VercelReq, res: VercelRes) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body: Body =
    typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const message = (body.message || "").trim();
  const lang = body.lang === "fr" ? "fr" : "en";
  const chunks = Array.isArray(body.chunks) ? body.chunks.slice(0, 5) : [];

  if (!message) {
    res.status(400).json({ error: "Empty message" });
    return;
  }

  try {
    const result = await resolveAnswer(message, lang, chunks);
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json({
      answer: null,
      reason: "request_failed",
      detail: error instanceof Error ? error.message : "unknown",
    });
  }
}
