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
  jobit,
  threejs,
  crmsunlog,
  portagefrance,
  portagesuisse,
  sunlogaiassistant,
  sunlogconseil,
  cvanalyzer,
  hrautomationagent,
  arcadegaming,
  glameshop,
  elibrarymobile,
  polynomialroot,
  sunlogErp,
  maynPortfolio,
  dahbiArt,
  fitlab,
  captainPortage,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
  // Backend & Databases
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
  // DevOps & Tools
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
    title: "Full Stack Software Engineer — ERP & Applications",
    companyName: "Usual IT",
    icon: starbucks,
    iconBg: "#1a1a2e",
    date: "October 2025 - Present",
    points: [
      "Leading the end-to-end design and development of a custom ERP platform with NestJS and Next.js, unifying finance, HR, inventory, and operations in a single scalable enterprise solution.",
      "Architected seamless bidirectional integration with Sage accounting software (Sage 100 / Sage X3) via REST APIs and custom middleware, automating invoicing, payroll sync, and real-time financial reporting.",
      "Built a modular microservices backend with NestJS (TypeORM, Prisma, PostgreSQL, Redis, RabbitMQ) and a high-performance Next.js dashboard (SSR, App Router, Tailwind CSS) serving 200+ daily active users.",
      "Designed and implemented core ERP modules: purchase orders, stock management, client billing, employee timesheets, CRM, and executive KPI dashboards with granular role-based access control (RBAC).",
      "Developed full-stack web applications and cross-platform mobile apps (React Native, Flutter) for field teams, client portals, and real-time operational workflows with offline-first capabilities.",
      "Deployed and managed cloud infrastructure on AWS and Google Cloud: Docker containerization, Kubernetes orchestration, Nginx reverse proxy, SSL/TLS, load balancing, and auto-scaling for 99.9% uptime.",
      "Established end-to-end CI/CD pipelines (GitHub Actions, GitLab CI) with automated testing (Jest, Cypress, Playwright), code quality gates (SonarQube), and blue-green deployments for zero-downtime releases.",
      "Implemented robust security architecture: OAuth2, JWT authentication, API rate limiting, data encryption at rest and in transit, and OWASP security best practices across all production systems.",
      "Developed AI-powered chatbots and RAG-based assistants (LangChain, OpenAI API, vector databases) integrated into the ERP, reducing internal support tickets by 35% and accelerating management decisions.",
      "Optimized database performance with PostgreSQL query tuning, Redis caching strategies, MongoDB for document storage, automated backups, and disaster recovery procedures.",
      "Set up monitoring and observability stack: Prometheus, Grafana dashboards, centralized logging (ELK), error tracking (Sentry), and performance profiling for proactive incident response.",
      "Led Agile/Scrum ceremonies, conducted code reviews, authored technical documentation, mentored junior developers, and collaborated directly with product owners and business stakeholders on roadmap delivery.",
    ],
  },
  {
    title: "AI & Machine Learning Engineer Intern",
    companyName: "BC Skills Group",
    icon: tesla,
    iconBg: "#16161d",
    date: "March 2025 – September 2025",
    points: [
      "Developed machine learning models for natural language processing and computer vision applications.",
      "Built end-to-end data pipelines for training, evaluation, and deployment of ML models.",
      "Created RESTful APIs to serve AI models in production environments using FastAPI and Docker.",
      "Collaborated with data scientists to optimize model performance and reduce inference latency.",
    ],
  },
  {
    title: "AI Application Developer",
    companyName: "Devoteam",
    icon: shopify,
    iconBg: "#1a1a2e",
    date: "July 2024 – September 2024",
    points: [
      "Developed intelligent applications leveraging OpenAI, Azure Cognitive Services, and other generative AI APIs.",
      "Built proof-of-concept prototypes for enterprise AI solutions, including document analysis and automated workflows.",
      "Integrated conversational AI capabilities into existing business applications.",
      "Documented technical specifications and presented solutions to stakeholders.",
    ],
  },
  {
    title: "Software Engineer Intern",
    companyName: "RADEES",
    icon: meta,
    iconBg: "#16161d",
    date: "Summer 2023",
    points: [
      "Contributed to the development of internal web applications using modern JavaScript frameworks.",
      "Implemented responsive UI components and ensured cross-browser compatibility.",
      "Participated in agile sprints, code reviews, and technical documentation.",
      "Gained hands-on experience with database design and REST API development.",
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

const projects: TProject[] = [
  {
    name: "Sunlog ERP",
    description:
      "Enterprise Resource Planning platform with a real-time dashboard for finance, HR, inventory, and operations. Built with NestJS and Next.js, featuring Sage accounting integration, role-based access control, KPI analytics, and automated billing workflows.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "erp",
        color: "pink-text-gradient",
      },
    ],
    image: sunlogErp,
    sourceCodeLink: "https://erp.sunlog.net/dashboard",
  },
  {
    name: "MAYN Portfolio",
    description:
      "Client portfolio website for MAYN — Montage & Tournage. A cinematic showcase platform highlighting video production work, services, and brand identity with smooth animations, responsive design, and a modern visual experience deployed on Vercel.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: maynPortfolio,
    sourceCodeLink: "https://mayn-portfolio.vercel.app/",
  },
  {
    name: "Dahbi Machrouhi Fine Art",
    description:
      "E-commerce art gallery for painter Dahbi Machrouhi featuring 38+ original paintings and prints. Full online boutique with collection filters, availability status, custom orders, multi-currency support, and an elegant gallery experience for fine art collectors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "e-commerce",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dahbiArt,
    sourceCodeLink: "https://dahbi-art.vercel.app/paintings",
  },
  {
    name: "FitLab",
    description:
      "Personal fitness web application for tracking workouts, monitoring progress, and managing training routines. Built for daily personal use with an intuitive interface, exercise logging, and performance insights deployed on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fitness",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: fitlab,
    sourceCodeLink: "https://fitlab-kohl.vercel.app/",
  },
  {
    name: "Captain Portage",
    description:
      "Corporate website for Captain Portage, a portage salarial platform for IT consultants. Features salary simulator, transparent pricing (300€/month fixed), service presentation, FAQ, and lead generation for freelance developers and tech experts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "portage",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: captainPortage,
    sourceCodeLink: "https://captain-portage.fr/",
  },
  {
    name: "Sunlog Conseil Intranet",
    description:
      "A comprehensive intranet platform for Sunlog Conseil, streamlining internal communication, document management, and employee collaboration. Features include role-based access control, real-time notifications, and integrated HR tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: sunlogconseil,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Sunlog Portage France",
    description:
      "Dedicated intranet solution for Sunlog Portage France, enabling seamless management of freelance consultants, contracts, timesheets, and invoicing. Includes a dashboard for real-time business analytics and compliance tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: portagefrance,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Sunlog Portage Suisse",
    description:
      "Multilingual intranet platform adapted for Swiss regulations and compliance. Features multi-currency support, canton-specific tax calculations, and integration with Swiss administrative systems for portage salarial management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: portagesuisse,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Sunlog CRM Mobile",
    description:
      "Cross-platform mobile CRM application for Sunlog sales teams. Provides offline-first functionality, contact management, opportunity tracking, and real-time synchronization with the main CRM system. Push notifications for important updates.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: crmsunlog,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Sunlog AI Assistant",
    description:
      "Enterprise chatbot trained on Sunlog's internal knowledge base. Provides instant answers to employee queries about company policies, procedures, and documentation. Features RAG architecture with custom embeddings for accurate, context-aware responses.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: sunlogaiassistant,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Smart CV Analyzer",
    description:
      "AI-powered recruitment assistant that automatically analyzes CVs, extracts key competencies, and generates tailored interview questions with suggested answers. Helps HR teams streamline candidate evaluation and maintain consistent hiring standards.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: cvanalyzer,
    sourceCodeLink: config.html.github,
  },
  {
    name: "HR Automation Agent",
    description:
      "Intelligent agent automating HR workflows including leave management, absence tracking, and approval processes. Features conversational interface for employees to submit requests, automatic manager notifications, and integration with calendar systems.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "ai-agents",
        color: "pink-text-gradient",
      },
    ],
    image: hrautomationagent,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Arcade Gaming Platform",
    description:
      "Retro gaming platform featuring classic arcade games: Pacman, Bouncyman, and JetFighter. Built with .NET C# for smooth gameplay, ODBC database connectivity for high scores and user profiles. Includes multiplayer modes and achievement systems.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet",
        color: "green-text-gradient",
      },
      {
        name: "odbc",
        color: "pink-text-gradient",
      },
    ],
    image: arcadegaming,
    sourceCodeLink: config.html.github,
  },
  {
    name: "GlamShop E-Commerce",
    description:
      "Full-stack e-commerce platform for cosmetics and makeup products. Features product catalog, shopping cart, secure payments, order tracking, and admin dashboard. Includes a companion mobile app for seamless shopping on-the-go.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: glameshop,
    sourceCodeLink: config.html.github,
  },
  {
    name: "E-Library Mobile",
    description:
      "Cross-platform digital library application built with Flutter. Features book browsing, reading progress tracking, bookmarks, and offline reading. Firebase backend for real-time synchronization across devices and user authentication.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: elibrarymobile,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Library Management System",
    description:
      "Comprehensive library management solution with member registration, book cataloging, loan tracking, and fine calculation. Features a modern Angular frontend with Bootstrap styling and robust Spring Boot backend with MySQL database.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Polynomial Root Calculator",
    description:
      "Intelligent mathematical tool using machine learning to calculate polynomial roots with high precision. Microservices architecture enables scalable computation. React frontend provides intuitive equation input and visual representation of solutions.",
    tags: [
      {
        name: "python-ml",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: polynomialroot,
    sourceCodeLink: config.html.github,
  },
  {
    name: "Forum BC Skills",
    description:
      "Plateforme collaborative moderne développée pour faciliter la communication interne et le partage de connaissances au sein de l'entreprise. Cette solution full-stack permet aux employés d'échanger des informations, poser des questions, partager des documents et collaborer efficacement avec des fonctionnalités administratives avancées.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: config.html.github,
  },
];

export { services, technologies, experiences, testimonials, projects };
