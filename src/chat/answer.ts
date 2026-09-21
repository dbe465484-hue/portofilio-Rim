import type { KnowledgeChunk } from "./types";

type LocalAnswerOptions = {
  query: string;
  chunks: KnowledgeChunk[];
  lang: "en" | "fr";
};

const fallback = {
  en: "I don't have that detail in Rim's portfolio context. Ask about her experience, projects, skills, or how to contact her — or write via the Contact section.",
  fr: "Je n'ai pas ce détail dans le contexte du portfolio de Rim. Demandez son expérience, ses projets, ses compétences, ou comment la contacter — ou passez par la section Contact.",
};

/** Grounded answer from retrieved portfolio chunks (no model training). */
export const answerFromChunks = ({
  query,
  chunks,
  lang,
}: LocalAnswerOptions): string => {
  if (chunks.length === 0) return fallback[lang];

  const q = query.toLowerCase();
  const isContact =
    /contact|email|mail|hire|recrut|disponible|remote|joind/.test(q);
  const isSkills = /skill|compétence|stack|techno|tool|outil/.test(q);
  const isExperience = /expérience|experience|role|travail|work|job|career/.test(
    q
  );
  const isProjects = /projet|project|built|ship|portfolio|realisation/.test(q);

  const primary = chunks[0];
  const extras = chunks.slice(1, 3);

  if (isContact) {
    const contact = chunks.find((c) => c.id === "contact") ?? primary;
    return lang === "fr"
      ? `Pour contacter Rim :\n\n${contact.text}`
      : `To reach Rim:\n\n${contact.text}`;
  }

  if (isSkills) {
    const skillChunks = chunks.filter((c) => c.id.startsWith("skills"));
    const body = (skillChunks.length ? skillChunks : chunks)
      .slice(0, 4)
      .map((c) => `• ${c.text}`)
      .join("\n");
    return lang === "fr"
      ? `Voici les compétences pertinentes dans le portfolio :\n\n${body}`
      : `Here are the relevant skills from the portfolio:\n\n${body}`;
  }

  if (isExperience) {
    const roles = chunks.filter((c) => c.id.startsWith("experience"));
    const body = (roles.length ? roles : chunks)
      .slice(0, 3)
      .map((c) => `### ${c.title}\n${c.text}`)
      .join("\n\n");
    return lang === "fr"
      ? `Parcours professionnel (extrait du portfolio) :\n\n${body}`
      : `Professional background (from the portfolio):\n\n${body}`;
  }

  if (isProjects) {
    const projectChunks = chunks.filter((c) => c.id.startsWith("project"));
    const body = (projectChunks.length ? projectChunks : chunks)
      .slice(0, 3)
      .map((c) => `### ${c.title}\n${c.text}`)
      .join("\n\n");
    return lang === "fr"
      ? `Projets du portfolio :\n\n${body}`
      : `Portfolio projects:\n\n${body}`;
  }

  const more =
    extras.length > 0
      ? `\n\n${extras.map((c) => `• ${c.title}: ${c.text.split("\n")[0]}`).join("\n")}`
      : "";

  return lang === "fr"
    ? `${primary.text}${more}`
    : `${primary.text}${more}`;
};
