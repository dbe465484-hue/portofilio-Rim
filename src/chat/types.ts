export type KnowledgeChunk = {
  id: string;
  title: string;
  text: string;
  tags: string[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};
