import type { KnowledgeChunk } from "./types";

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9+#.\-]+/)
    .filter((token) => token.length > 1);

/** Expand query terms with FR/EN portfolio synonyms for better recall. */
const expandQuery = (tokens: string[]): string[] => {
  const synonyms: Record<string, string[]> = {
    who: ["rim", "profil", "about", "qui"],
    qui: ["rim", "profil", "about", "who"],
    about: ["profil", "rim", "presentation"],
    contact: ["email", "mail", "hire", "recrut", "joindre"],
    hire: ["contact", "email", "recrut", "disponible"],
    skill: ["skills", "stack", "competence", "techno", "outil"],
    skills: ["skill", "stack", "competence", "techno"],
    competence: ["skills", "stack", "techno"],
    stack: ["skills", "techno", "react", "python", "langchain"],
    experience: ["role", "travail", "job", "career", "usual", "devoteam"],
    role: ["experience", "travail"],
    projet: ["project", "portfolio", "rag", "agent"],
    project: ["projet", "portfolio", "rag", "agent"],
    rag: ["vector", "retrieval", "langchain", "agent"],
    agent: ["agents", "langgraph", "langchain", "rag"],
    agents: ["agent", "langgraph", "langchain"],
    ai: ["ia", "llm", "openai", "langgraph"],
    ia: ["ai", "llm", "openai"],
    remote: ["contact", "disponible", "hire"],
  };

  const out = new Set(tokens);
  for (const token of tokens) {
    const extras = synonyms[token];
    if (extras) extras.forEach((item) => out.add(item));
  }
  return [...out];
};

/** Lightweight lexical retrieval over portfolio chunks (no external embeddings). */
export const retrieveChunks = (
  query: string,
  chunks: KnowledgeChunk[],
  limit = 5
): KnowledgeChunk[] => {
  const tokens = expandQuery(tokenize(query));
  if (tokens.length === 0) return chunks.slice(0, limit);

  const scored = chunks.map((chunk) => {
    const haystack = tokenize(`${chunk.title} ${chunk.text} ${chunk.tags.join(" ")}`);
    const set = new Set(haystack);
    let score = 0;
    for (const token of tokens) {
      if (set.has(token)) score += 3;
      else if (haystack.some((word) => word.includes(token) || token.includes(word))) {
        score += 1;
      }
    }
    if (chunk.id === "profile" && tokens.some((t) => ["who", "rim", "about", "profil", "qui"].includes(t))) {
      score += 4;
    }
    if (chunk.id === "contact" && tokens.some((t) => ["contact", "email", "hire", "mail"].includes(t))) {
      score += 4;
    }
    if (
      chunk.id.startsWith("project") &&
      tokens.some((t) => ["project", "projet", "rag", "agent"].includes(t))
    ) {
      score += 2;
    }
    return { chunk, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.chunk);
};
