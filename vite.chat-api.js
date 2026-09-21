/**
 * Dev-only /api/chat that talks to local Ollama.
 * Production uses api/chat.ts on Vercel (Groq → OpenAI → Ollama).
 */

const systemPrompt = (lang) =>
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

const readBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });

const sendJson = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify(payload));
};

export function portfolioChatDevApi() {
  return {
    name: "portfolio-chat-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/chat") return next();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { error: "Method not allowed" });
          return;
        }

        try {
          const raw = await readBody(req);
          const body = JSON.parse(raw || "{}");
          const message = (body.message || "").trim();
          const lang = body.lang === "fr" ? "fr" : "en";
          const chunks = Array.isArray(body.chunks) ? body.chunks.slice(0, 5) : [];

          if (!message) {
            sendJson(res, 400, { error: "Empty message" });
            return;
          }

          const baseUrl = (
            process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434"
          ).replace(/\/$/, "");
          const model = process.env.OLLAMA_MODEL || "llama3.2:1b";

          const context = chunks
            .map((chunk, i) => `[${i + 1}] ${chunk.title}\n${chunk.text}`)
            .join("\n\n");

          const response = await fetch(`${baseUrl}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              model,
              stream: false,
              options: { temperature: 0.2, num_predict: 500 },
              messages: [
                { role: "system", content: systemPrompt(lang) },
                {
                  role: "user",
                  content: `CONTEXT:\n${context || "(empty)"}\n\nQUESTION:\n${message}`,
                },
              ],
            }),
          });

          if (!response.ok) {
            sendJson(res, 200, {
              answer: null,
              reason: "ollama_error",
              detail: await response.text(),
              provider: "ollama",
            });
            return;
          }

          const data = await response.json();
          const answer = data?.message?.content?.trim() || null;
          sendJson(res, 200, {
            answer,
            provider: "ollama",
            model,
          });
        } catch (error) {
          sendJson(res, 200, {
            answer: null,
            reason: "ollama_unreachable",
            detail: error instanceof Error ? error.message : "unknown",
            provider: "ollama",
          });
        }
      });
    },
  };
}
