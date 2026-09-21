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

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(200).json({ answer: null, reason: "missing_api_key" });
    return;
  }

  const context = chunks
    .map((chunk, i) => `[${i + 1}] ${chunk.title}\n${chunk.text}`)
    .join("\n\n");

  const system =
    lang === "fr"
      ? `Tu es l'assistante du portfolio de Rim Belabadia (AI & Software Engineer).
Réponds uniquement à partir du CONTEXTE fourni (contenu du site).
Sois concise, professionnelle, chaleureuse. Si l'info manque, dis-le et propose la section Contact.
N'invente pas d'expérience ni de diplôme.`
      : `You are the portfolio assistant for Rim Belabadia (AI & Software Engineer).
Answer only from the provided CONTEXT (site content).
Be concise, professional, warm. If information is missing, say so and suggest the Contact section.
Do not invent experience or credentials.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          { role: "system", content: system },
          {
            role: "user",
            content: `CONTEXT:\n${context || "(empty)"}\n\nQUESTION:\n${message}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      res.status(200).json({ answer: null, reason: "upstream_error", detail });
      return;
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const answer = data.choices?.[0]?.message?.content?.trim() || null;
    res.status(200).json({ answer });
  } catch (error) {
    res.status(200).json({
      answer: null,
      reason: "request_failed",
      detail: error instanceof Error ? error.message : "unknown",
    });
  }
}
