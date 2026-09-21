import type { KnowledgeChunk } from "./types";

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9+#.\-]+/)
    .filter((token) => token.length > 1);

/** Lightweight lexical retrieval over portfolio chunks (no external embeddings). */
export const retrieveChunks = (
  query: string,
  chunks: KnowledgeChunk[],
  limit = 4
): KnowledgeChunk[] => {
  const tokens = tokenize(query);
  if (tokens.length === 0) return chunks.slice(0, limit);

  const scored = chunks.map((chunk) => {
    const haystack = tokenize(`${chunk.title} ${chunk.text} ${chunk.tags.join(" ")}`);
    const set = new Set(haystack);
    let score = 0;
    for (const token of tokens) {
      if (set.has(token)) score += 2;
      else if (haystack.some((word) => word.includes(token) || token.includes(word))) {
        score += 1;
      }
    }
    // Prefer profile for identity questions
    if (
      chunk.id === "profile" &&
      tokens.some((t) => ["who", "rim", "about", "profil", "qui"].includes(t))
    ) {
      score += 3;
    }
    return { chunk, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.chunk);
};
