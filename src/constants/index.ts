import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";
import { config } from "./config";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  crmsunlog,
  sunlogaiassistant,
  sunlogconseil,
  cvanalyzer,
  hrautomationagent,
  glameshop,
  flutterShop,
  sunlogErp,
  maynPortfolio,
  dahbiArt,
  fitlab,
  captainPortage,
  biol,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "AI Conversational Solutions Engineer",
    icon: backend,
  },
  {
    title: "AI Application Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  // Frontend
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // Backend & Databases
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  // Mobile
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  // DevOps & Tools
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Software Engineer, ERP & Applications",
    companyName: "Usual IT",
    icon: starbucks,
    iconBg: "#1a1a2e",
    date: "October 2025, Present",
    points: [
      "Leading end-to-end design of a custom ERP (NestJS + Next.js) unifying finance, HR, inventory, and operations for 200+ daily users.",
      "Built bidirectional Sage integration (REST + middleware) to automate invoicing, payroll sync, and financial reporting.",
      "Shipped AI Agents and RAG assistants (LangChain / LangGraph, Vector DBs) inside the ERP, cutting internal support tickets by 35%.",
      "Owned cloud delivery on AWS/GCP with Docker, CI/CD, monitoring, and security hardening for production uptime.",
    ],
  },
  {
    title: "AI & Machine Learning Engineer Intern",
    companyName: "BC Skills Group",
    icon: tesla,
    iconBg: "#16161d",
    date: "March 2025, September 2025",
    points: [
      "Built NLP and computer-vision models with end-to-end training and evaluation pipelines.",
      "Served models in production via FastAPI and Docker with LLMOps-oriented monitoring.",
      "Explored Cybersecurity AI: anomaly detection and hardening AI endpoints against abuse.",
      "Collaborated with data scientists to cut inference latency and improve model quality.",
    ],
  },
  {
    title: "AI Application Developer",
    companyName: "Devoteam",
    icon: shopify,
    iconBg: "#1a1a2e",
    date: "July 2024, September 2024",
    points: [
      "Built intelligent apps on OpenAI and Azure Cognitive Services for enterprise workflows.",
      "Delivered PoCs for document analysis and automated business processes.",
      "Integrated conversational AI into existing apps with secure LLMOps deployment patterns.",
      "Documented specs and presented solutions to stakeholders.",
    ],
  },
  {
    title: "Software Engineer Intern",
    companyName: "RADEES",
    icon: meta,
    iconBg: "#16161d",
    date: "Summer 2023",
    points: [
      "Contributed to internal web apps with modern JavaScript frameworks.",
      "Implemented responsive UI components with cross-browser compatibility.",
      "Joined agile sprints, code reviews, and technical documentation.",
      "Practiced database design and REST API development.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Rim demonstrated exceptional problem-solving skills during our AI project. Her ability to translate complex requirements into elegant solutions is remarkable.",
    name: "Technical Lead",
    designation: "Engineering Manager",
    company: "BC Skills Group",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "A talented developer with a strong understanding of both frontend and AI technologies. Rim consistently delivered high-quality work ahead of schedule.",
    name: "Project Manager",
    designation: "Senior PM",
    company: "Devoteam",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Working with Rim was a pleasure. She brings creativity, technical expertise, and excellent communication skills to every project she touches.",
    name: "Team Lead",
    designation: "Software Architect",
    company: "Usual IT",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const tagColors = [
  "blue-text-gradient",
  "green-text-gradient",
  "pink-text-gradient",
  "orange-text-gradient",
] as const;

const makeTags = (names: string[]) =>
  names.map((name, i) => ({
    name,
    color: tagColors[i % tagColors.length],
  }));

const projects: TProject[] = [
  {
    name: "MedAssist AI",
    description:
      "Intelligent medical assistant built with LLMs + RAG. LangGraph agents retrieve grounded answers from clinical docs in a Vector DB, apply Prompt Engineering guardrails, and never invent unsupported medical claims. Designed for protocol lookup and triage guidance with audit-friendly citations.",
    tags: makeTags([
      "langgraph",
      "ai-agents",
      "rag",
      "vector-db",
      "prompt-engineering",
      "langchain",
      "fastapi",
      "openai",
    ]),
    image: biol,
    sourceCodeLink: config.html.github,
    category: "ai",
    featured: true,
    impact: "Grounded RAG answers + safety guardrails for clinical workflows",
  },
  {
    name: "Sunlog AI Assistant",
    description:
      "Enterprise knowledge assistant with AI Agents over internal docs. LangGraph orchestrates retrieval, tool calls, and escalation; Vector DB + Prompt Engineering keep answers source-cited. Integrated into ERP workflows for policy, HR, and ops Q&A.",
    tags: makeTags([
      "langgraph",
      "ai-agents",
      "langchain",
      "rag",
      "vector-db",
      "prompt-engineering",
      "openai",
      "pinecone",
    ]),
    image: sunlogaiassistant,
    sourceCodeLink: config.html.github,
    category: "ai",
    featured: true,
    impact: "−35% internal support tickets via RAG agents in production",
  },
  {
    name: "Smart CV Analyzer",
    description:
      "Recruitment AI that parses CVs, extracts skills, and generates interview questions with suggested answers. NLP + LLM pipeline with structured Prompt Engineering for consistent, bias-aware evaluation across hiring teams.",
    tags: makeTags([
      "python",
      "nlp",
      "openai",
      "prompt-engineering",
      "fastapi",
      "react",
      "spacy",
      "postgresql",
    ]),
    image: cvanalyzer,
    sourceCodeLink: config.html.github,
    category: "ai",
    featured: true,
    impact: "Faster screening with structured, repeatable interview packs",
  },
  {
    name: "HR Automation Agent",
    description:
      "Agentic HR copilot for leave, absences, and approvals. LangGraph routes intents to tools (calendar, notifications, DB); Prompt Engineering enforces role policies. Employees chat requests; managers get auto-summaries.",
    tags: makeTags([
      "ai-agents",
      "langgraph",
      "langchain",
      "fastapi",
      "postgresql",
      "celery",
      "redis",
      "openai",
    ]),
    image: hrautomationagent,
    sourceCodeLink: config.html.github,
    category: "ai",
    featured: true,
    impact: "Automated leave workflows with agent tool-calling",
  },
  {
    name: "Sunlog ERP",
    description:
      "Custom ERP unifying finance, HR, inventory, and ops. NestJS + Next.js, Sage integration, RBAC, KPI dashboards, and embedded AI assistants. Production platform used daily by operations teams.",
    tags: makeTags([
      "nestjs",
      "nextjs",
      "postgresql",
      "typescript",
      "sage",
      "docker",
      "redis",
      "langgraph",
    ]),
    image: sunlogErp,
    sourceCodeLink: config.html.github,
    category: "enterprise",
    featured: true,
    impact: "200+ DAU · Sage sync · AI copilots inside ERP",
  },
  {
    name: "Biol",
    description:
      "Biological analysis platform for lab workflows, patient data, and test results. Secure auth, role-based dashboards, and a modern UI for healthcare professionals, live in production.",
    tags: makeTags([
      "nextjs",
      "prisma",
      "postgresql",
      "nextauth",
      "tailwindcss",
      "typescript",
      "vercel",
    ]),
    image: biol,
    sourceCodeLink: "https://biol-beta.vercel.app/login",
    category: "fullstack",
    featured: true,
    impact: "Live healthcare workflow platform",
  },
  {
    name: "Flutter Shop",
    description:
      "Cross-platform e-commerce app with Flutter + Firebase: onboarding, catalog, cart, auth, and real-time sync. Deployed as Flutter web with a mobile-first UX.",
    tags: makeTags([
      "flutter",
      "dart",
      "firebase",
      "firestore",
      "firebase-auth",
      "cloud-storage",
      "riverpod",
    ]),
    image: flutterShop,
    sourceCodeLink: "https://web-pi-ten-56.vercel.app/",
    category: "mobile",
    impact: "Live Flutter + Firebase commerce demo",
  },
  {
    name: "Dahbi Machrouhi Fine Art",
    description:
      "E-commerce art gallery for painter Dahbi Machrouhi, 38+ works, filters, custom orders, multi-currency. Client delivery with polished UX on Vercel.",
    tags: makeTags([
      "nextjs",
      "react",
      "stripe",
      "tailwindcss",
      "typescript",
      "i18n",
      "vercel",
    ]),
    image: dahbiArt,
    sourceCodeLink: "https://dahbi-art.vercel.app/paintings",
    category: "fullstack",
    impact: "Client live boutique · 38+ artworks online",
  },
  {
    name: "MAYN Portfolio",
    description:
      "Cinematic portfolio for MAYN, Montage & Tournage. Motion-rich Next.js site showcasing production work and brand identity.",
    tags: makeTags([
      "nextjs",
      "react",
      "tailwindcss",
      "framer-motion",
      "typescript",
      "vercel",
      "gsap",
    ]),
    image: maynPortfolio,
    sourceCodeLink: "https://mayn-portfolio.vercel.app/",
    category: "fullstack",
    impact: "Client live brand site",
  },
  {
    name: "FitLab",
    description:
      "Personal fitness tracker for workouts, progress, and routines. Fast React/Vite UI with charts, shipped and used daily.",
    tags: makeTags([
      "react",
      "vite",
      "typescript",
      "tailwindcss",
      "chartjs",
      "zustand",
      "vercel",
    ]),
    image: fitlab,
    sourceCodeLink: "https://fitlab-kohl.vercel.app/",
    category: "mobile",
    impact: "Live product in daily personal use",
  },
  {
    name: "Captain Portage",
    description:
      "Corporate site for Captain Portage with salary simulator, transparent pricing, and lead capture for IT freelancers.",
    tags: makeTags([
      "nextjs",
      "react",
      "tailwindcss",
      "typescript",
      "seo",
      "vercel",
      "analytics",
    ]),
    image: captainPortage,
    sourceCodeLink: "https://captain-portage.fr/",
    category: "enterprise",
    impact: "Live lead-gen platform for portage salarial",
  },
  {
    name: "Sunlog Conseil Intranet",
    description:
      "Enterprise intranet for communication, documents, and HR tools. Real-time notifications, RBAC, and collaboration features for internal teams.",
    tags: makeTags([
      "react",
      "nodejs",
      "express",
      "mongodb",
      "jwt",
      "socket.io",
      "aws-s3",
    ]),
    image: sunlogconseil,
    sourceCodeLink: config.html.github,
    category: "enterprise",
    impact: "Centralized internal ops & document access",
  },
  {
    name: "Sunlog CRM Mobile",
    description:
      "Offline-first React Native CRM for sales teams: contacts, opportunities, sync, and push notifications tied to the main CRM.",
    tags: makeTags([
      "react-native",
      "typescript",
      "redux",
      "firebase",
      "expo",
      "rest-api",
      "push-notifications",
    ]),
    image: crmsunlog,
    sourceCodeLink: config.html.github,
    category: "mobile",
    impact: "Field sales CRM with offline sync",
  },
  {
    name: "ShopSphere E-Commerce",
    description:
      "Full Laravel/PHP commerce stack: catalog, cart, checkout, payments, admin dashboard with Eloquent + MySQL.",
    tags: makeTags([
      "laravel",
      "php",
      "mysql",
      "blade",
      "eloquent",
      "stripe",
      "redis",
    ]),
    image: glameshop,
    sourceCodeLink: config.html.github,
    category: "fullstack",
    impact: "End-to-end commerce + admin back-office",
  },
];

export { services, technologies, experiences, testimonials, projects };

