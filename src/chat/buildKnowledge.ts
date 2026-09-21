import { experiences, projects } from "../constants";
import { config } from "../constants/config";
import type { TranslationDict } from "../i18n";
import type { KnowledgeChunk } from "./types";

/** Build a portfolio knowledge base from existing site content (no external training). */
export const buildKnowledge = (t: TranslationDict): KnowledgeChunk[] => {
  const chunks: KnowledgeChunk[] = [];

  chunks.push({
    id: "profile",
    title: "Profile",
    text: [
      `${config.html.fullName} is an AI & Software Engineer.`,
      t.hero.p.join(" "),
      t.about.content,
      `Email: ${config.html.email}`,
      `GitHub: ${config.html.github}`,
      t.footer.location,
    ].join("\n"),
    tags: ["profile", "about", "rim", "contact", "email", "github", "ai", "engineer"],
  });

  chunks.push({
    id: "focus",
    title: t.about.focus,
    text: t.about.focusItems.join("\n"),
    tags: ["focus", "agents", "rag", "langgraph", "prompt", "fullstack"],
  });

  t.experience.roles.forEach((role, index) => {
    const company = experiences[index]?.companyName ?? "";
    chunks.push({
      id: `experience-${index}`,
      title: `${role.title} @ ${company}`,
      text: [`${role.title} at ${company}`, role.date, ...role.points].join("\n"),
      tags: [
        "experience",
        "work",
        "role",
        company.toLowerCase(),
        ...role.title.toLowerCase().split(/\W+/),
      ],
    });
  });

  t.skills.categories.forEach((category, index) => {
    chunks.push({
      id: `skills-${index}`,
      title: category.name,
      text: `${category.name}: ${category.skills.join(", ")}`,
      tags: ["skills", "stack", "tech", ...category.skills.map((s) => s.toLowerCase())],
    });
  });

  projects.forEach((project, index) => {
    chunks.push({
      id: `project-${index}`,
      title: project.name,
      text: [
        project.name,
        project.description,
        project.impact ? `Impact: ${project.impact}` : "",
        `Tech: ${project.tags.map((tag) => tag.name).join(", ")}`,
        `Category: ${project.category ?? "general"}`,
      ]
        .filter(Boolean)
        .join("\n"),
      tags: [
        "project",
        "portfolio",
        project.name.toLowerCase(),
        project.category ?? "",
        ...project.tags.map((tag) => tag.name.toLowerCase()),
      ],
    });
  });

  chunks.push({
    id: "contact",
    title: "Contact",
    text: [
      t.contact.intro,
      `Email: ${config.html.email}`,
      `GitHub: ${config.html.github}`,
      "Open to remote opportunities and thoughtful AI product roles.",
    ].join("\n"),
    tags: ["contact", "hire", "email", "remote", "opportunity"],
  });

  return chunks;
};
