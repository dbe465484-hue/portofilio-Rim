export type Lang = "en" | "fr";

export type TranslationDict = {
  nav: { id: string; title: string }[];
  hero: {
    greeting: string;
    roleLine1: string;
    roleLine2: string;
    p: [string, string];
    downloadCv: string;
    github: string;
    email: string;
  };
  about: {
    title: string;
    content: string;
    focus: string;
    focusItems: string[];
    cta: string;
  };
  experience: {
    p: string;
    h2: string;
    intro: string;
    roles: {
      title: string;
      date: string;
      points: string[];
    }[];
  };
  skills: {
    p: string;
    h2: string;
    intro: string;
    categories: { name: string; skills: string[] }[];
  };
  works: {
    p: string;
    h2: string;
    content: string;
    categoriesAria: string;
    categories: { id: string; label: string }[];
    categoryLabels: Record<string, string>;
    empty: string;
    source: string;
    live: string;
  };
  certifications: {
    p: string;
    h2: string;
    intro: string;
    categoriesAria: string;
    categories: { id: string; label: string }[];
    empty: string;
    issued: string;
    id: string;
  };
  contact: {
    p: string;
    h2: string;
    intro: string;
    orEmail: string;
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    blurb: string;
    cta: string;
    explore: string;
    connect: string;
    downloadCv: string;
    selectedWork: string;
    location: string;
    portfolio: string;
  };
  lang: {
    switchToEn: string;
    switchToFr: string;
  };
  chat: {
    open: string;
    close: string;
    eyebrow: string;
    title: string;
    hint: string;
    welcome: string;
    placeholder: string;
    send: string;
    thinking: string;
    suggestionsLabel: string;
    suggestions: string[];
  };
};

export const translations: Record<Lang, TranslationDict> = {
  en: {
    nav: [
      { id: "about", title: "About" },
      { id: "work", title: "Experience" },
      { id: "tech", title: "Skills" },
      { id: "projects", title: "Projects" },
      { id: "certifications", title: "Certifications" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Hi, I'm {name}",
      roleLine1: "AI & Software",
      roleLine2: "Engineer",
      p: [
        "I build AI systems that feel useful, not just impressive.",
        "AI Agents, LangGraph, Vector DBs & Prompt Engineering, with a full-stack craft behind them.",
      ],
      downloadCv: "Download CV",
      github: "GitHub",
      email: "Email",
    },
    about: {
      title: "About",
      content: `Hello, I'm Rim, a MIAGE engineer who loves turning messy ideas into calm, working products. Most of my energy goes into AI Agents, LangGraph workflows, Vector Databases, Prompt Engineering, and the full-stack systems that make them reliable in production.

I care about the details that users never see: grounding RAG answers, evaluating prompts, defending against injection, and shipping interfaces that feel simple.

Right now I work as a Software Engineer, building agentic tools with LangChain, LangGraph, OpenAI, React, Node.js, and Python. If you're curious about thoughtful AI products (not just demos), we'll probably get along.`,
      focus: "Focus",
      focusItems: [
        "AI Agents & LangGraph workflows",
        "Vector databases & RAG systems",
        "Prompt engineering & evaluation",
        "Full-stack product delivery",
      ],
      cta: "Get in touch",
    },
    experience: {
      p: "Roles",
      h2: "Experience",
      intro:
        "A simple record of roles I have held, from internships to full-time work in AI and software engineering.",
      roles: [
        {
          title: "Full Stack Software Engineer, ERP & Applications",
          date: "October 2025 — Present",
          points: [
            "Leading end-to-end design of a custom ERP (NestJS + Next.js) unifying finance, HR, inventory, and operations for 200+ daily users.",
            "Built bidirectional Sage integration (REST + middleware) to automate invoicing, payroll sync, and financial reporting.",
            "Shipped AI Agents and RAG assistants (LangChain / LangGraph, Vector DBs) inside the ERP, cutting internal support tickets by 35%.",
            "Owned cloud delivery on AWS/GCP with Docker, CI/CD, monitoring, and security hardening for production uptime.",
          ],
        },
        {
          title: "AI & Machine Learning Engineer Intern",
          date: "March 2025 — September 2025",
          points: [
            "Built NLP and computer-vision models with end-to-end training and evaluation pipelines.",
            "Served models in production via FastAPI and Docker with LLMOps-oriented monitoring.",
            "Explored Cybersecurity AI: anomaly detection and hardening AI endpoints against abuse.",
            "Collaborated with data scientists to cut inference latency and improve model quality.",
          ],
        },
        {
          title: "AI Application Developer",
          date: "July 2024 — September 2024",
          points: [
            "Built intelligent apps on OpenAI and Azure Cognitive Services for enterprise workflows.",
            "Delivered PoCs for document analysis and automated business processes.",
            "Integrated conversational AI into existing apps with secure LLMOps deployment patterns.",
            "Documented specs and presented solutions to stakeholders.",
          ],
        },
        {
          title: "Software Engineer Intern",
          date: "Summer 2023",
          points: [
            "Contributed to internal web apps with modern JavaScript frameworks.",
            "Implemented responsive UI components with cross-browser compatibility.",
            "Joined agile sprints, code reviews, and technical documentation.",
            "Practiced database design and REST API development.",
          ],
        },
      ],
    },
    skills: {
      p: "Toolkit",
      h2: "Skills",
      intro:
        "A practical toolkit for AI systems, full-stack products, cloud delivery, and the craft that keeps them reliable in production.",
      categories: [
        {
          name: "Languages",
          skills: [
            "Java",
            "Python",
            "C",
            "C++",
            "C#",
            "JavaScript",
            "TypeScript",
            "PHP",
            "SQL",
            "Bash",
          ],
        },
        {
          name: "AI & Data Science",
          skills: [
            "AI Agents",
            "LangGraph",
            "Vector DB",
            "Prompt Engineering",
            "LangChain",
            "RAG",
            "OpenAI API",
            "ChromaDB",
            "FAISS",
            "NLP",
            "Machine Learning",
            "Deep Learning",
            "TensorFlow",
            "scikit-learn",
          ],
        },
        {
          name: "Frontend",
          skills: [
            "React",
            "Next.js",
            "Angular",
            "Vue.js",
            "Redux",
            "Vite",
            "Webpack",
            "HTML5",
            "CSS3",
            "Sass",
            "Bootstrap",
            "Tailwind",
            "Framer Motion",
            "Responsive Design",
          ],
        },
        {
          name: "Backend",
          skills: [
            "Node.js",
            "NestJS",
            "Express.js",
            "FastAPI",
            "Spring Boot",
            "Spring Cloud",
            "Laravel",
            "RESTful APIs",
            "GraphQL",
            "WebSockets",
            "RabbitMQ",
            "Microservices",
            "OAuth2",
            "JWT",
            "JEE",
            "Hibernate",
          ],
        },
        {
          name: "Mobile",
          skills: [
            "React Native",
            "Flutter",
            "Expo",
            "iOS",
            "Android",
            "Mobile UI/UX",
          ],
        },
        {
          name: "Databases",
          skills: [
            "MySQL",
            "PostgreSQL",
            "Oracle DB",
            "SQL Server",
            "MongoDB",
            "Firebase",
            "Prisma",
            "TypeORM",
            "Redis",
            "Vector DB",
            "ChromaDB",
            "Database Design",
          ],
        },
        {
          name: "DevOps & Cloud",
          skills: [
            "Docker",
            "Kubernetes",
            "OpenShift",
            "AWS",
            "Azure",
            "Google Cloud",
            "Nginx",
            "Terraform",
            "Helm",
            "Git / GitHub",
            "GitLab CI",
            "CI/CD",
            "Linux",
            "Windows Server",
            "SSL/TLS",
          ],
        },
        {
          name: "Testing & QA",
          skills: [
            "Jest",
            "Cypress",
            "JUnit",
            "Mockito",
            "Selenium",
            "Postman",
            "SonarQube",
            "TDD",
          ],
        },
        {
          name: "Methodologies",
          skills: [
            "Agile / Scrum",
            "Kanban",
            "UML",
            "Design Patterns",
            "SOLID",
            "Code Review",
            "Technical Documentation",
            "ERP",
            "Sage Integration",
            "SWOT",
          ],
        },
        {
          name: "ERP & Business",
          skills: [
            "Sage 100",
            "Sage X3",
            "ERP Architecture",
            "Financial Modules",
            "Inventory Management",
            "CRM",
            "Business Intelligence",
          ],
        },
        {
          name: "Security & Cybersecurity AI",
          skills: [
            "Cybersecurity AI",
            "OWASP",
            "Prompt Injection Defense",
            "AI Threat Detection",
            "OAuth2",
            "JWT",
            "HTTPS",
            "Encryption",
            "Prometheus",
            "Grafana",
          ],
        },
        {
          name: "Tools & Collaboration",
          skills: [
            "VS Code",
            "IntelliJ IDEA",
            "Postman",
            "Jira",
            "Confluence",
            "Figma",
            "Swagger",
            "GitHub Actions",
          ],
        },
      ],
    },
    works: {
      p: "Selected work",
      h2: "Projects",
      content:
        "Things I've shipped: AI agents, RAG systems, and full-stack products.",
      categoriesAria: "Project categories",
      categories: [
        { id: "all", label: "All" },
        { id: "ai", label: "AI & Agents" },
        { id: "enterprise", label: "Enterprise" },
        { id: "mobile", label: "Mobile" },
        { id: "fullstack", label: "Full Stack" },
      ],
      categoryLabels: {
        ai: "AI & Agents",
        enterprise: "Enterprise",
        mobile: "Mobile",
        fullstack: "Full Stack",
      },
      empty: "No projects in this category.",
      source: "Source",
      live: "View live",
    },
    certifications: {
      p: "Credentials",
      h2: "Certifications",
      intro: "Selected credentials across AI, security, data, and development.",
      categoriesAria: "Certification categories",
      categories: [
        { id: "all", label: "All" },
        { id: "ai", label: "AI & ML" },
        { id: "security", label: "Cybersecurity" },
        { id: "data", label: "Data" },
        { id: "dev", label: "Development" },
      ],
      empty: "No certifications in this category.",
      issued: "Issued",
      id: "ID",
    },
    contact: {
      p: "Say hello",
      h2: "Contact",
      intro:
        "Want to talk about AI products, agents, or a role that needs both judgment and shipping speed? Write me a note.",
      orEmail: "Or email directly:",
      form: {
        name: { span: "Your Name", placeholder: "What's your name?" },
        email: { span: "Your Email", placeholder: "What's your email?" },
        message: {
          span: "Your Message",
          placeholder: "How can I help you?",
        },
      },
      send: "Send message",
      sending: "Sending…",
      success: "Thank you. I will get back to you soon.",
      error: "Something went wrong.",
    },
    footer: {
      blurb:
        "AI & Software Engineer building agents, RAG systems, and products that feel useful.",
      cta: "Start a conversation",
      explore: "Explore",
      connect: "Connect",
      downloadCv: "Download CV",
      selectedWork: "Selected work",
      location: "Based in Morocco · Open to remote opportunities",
      portfolio: "Portfolio v. I",
    },
    lang: {
      switchToEn: "Switch to English",
      switchToFr: "Passer en français",
    },
    chat: {
      open: "Ask about Rim",
      close: "Close",
      eyebrow: "Grounded assistant",
      title: "Ask the portfolio",
      hint: "Answers come from this site’s content — profile, roles, projects, skills — not from external training.",
      welcome:
        "Hi — I can answer from Rim’s portfolio: experience, AI projects, skills, or how to reach her.",
      placeholder: "Ask about experience, projects, skills…",
      send: "Ask",
      thinking: "Thinking…",
      suggestionsLabel: "Suggested questions",
      suggestions: [
        "What does Rim work on?",
        "Show AI / RAG projects",
        "What is her stack?",
        "How can I contact her?",
      ],
    },
  },
  fr: {
    nav: [
      { id: "about", title: "À propos" },
      { id: "work", title: "Expérience" },
      { id: "tech", title: "Compétences" },
      { id: "projects", title: "Projets" },
      { id: "certifications", title: "Certifications" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      greeting: "Bonjour, je suis {name}",
      roleLine1: "Ingénieure AI",
      roleLine2: "&\u00a0Logiciel",
      p: [
        "Je conçois des systèmes d'IA utiles, pas seulement impressionnants.",
        "Agents IA, LangGraph, bases vectorielles & Prompt Engineering, avec un savoir-faire full-stack.",
      ],
      downloadCv: "Télécharger le CV",
      github: "GitHub",
      email: "Email",
    },
    about: {
      title: "À propos",
      content: `Bonjour, je suis Rim, ingénieure MIAGE. J'aime transformer des idées floues en produits calmes et fonctionnels. Mon énergie va surtout aux agents IA, aux workflows LangGraph, aux bases vectorielles, au Prompt Engineering, et aux systèmes full-stack qui les rendent fiables en production.

Je soigne les détails que les utilisateurs ne voient jamais : ancrer les réponses RAG, évaluer les prompts, se défendre contre l'injection, et livrer des interfaces simples.

Aujourd'hui, je travaille comme Software Engineer sur des outils agentiques avec LangChain, LangGraph, OpenAI, React, Node.js et Python. Si les produits IA pensés (pas seulement les démos) vous intéressent, on devrait bien s'entendre.`,
      focus: "Focus",
      focusItems: [
        "Agents IA & workflows LangGraph",
        "Bases vectorielles & systèmes RAG",
        "Prompt engineering & évaluation",
        "Livraison de produits full-stack",
      ],
      cta: "Me contacter",
    },
    experience: {
      p: "Parcours",
      h2: "Expérience",
      intro:
        "Un parcours simple des rôles que j'ai occupés, des stages au temps plein en IA et génie logiciel.",
      roles: [
        {
          title: "Ingénieure logiciel full-stack, ERP & applications",
          date: "Octobre 2025 — Présent",
          points: [
            "Pilotage de bout en bout d'un ERP sur mesure (NestJS + Next.js) unifiant finance, RH, stocks et opérations pour 200+ utilisateurs quotidiens.",
            "Intégration bidirectionnelle Sage (REST + middleware) pour automatiser facturation, synchro paie et reporting financier.",
            "Mise en production d'agents IA et d'assistants RAG (LangChain / LangGraph, bases vectorielles) dans l'ERP, réduisant les tickets support de 35 %.",
            "Livraison cloud AWS/GCP avec Docker, CI/CD, monitoring et durcissement sécurité pour la disponibilité en production.",
          ],
        },
        {
          title: "Stagiaire ingénieure IA & Machine Learning",
          date: "Mars 2025 — Septembre 2025",
          points: [
            "Conception de modèles NLP et vision par ordinateur avec pipelines d'entraînement et d'évaluation de bout en bout.",
            "Mise en service via FastAPI et Docker avec un monitoring orienté LLMOps.",
            "Exploration de la cybersécurité IA : détection d'anomalies et durcissement des endpoints contre les abus.",
            "Collaboration avec des data scientists pour réduire la latence d'inférence et améliorer la qualité des modèles.",
          ],
        },
        {
          title: "Développeuse d'applications IA",
          date: "Juillet 2024 — Septembre 2024",
          points: [
            "Applications intelligentes sur OpenAI et Azure Cognitive Services pour des workflows entreprise.",
            "PoC d'analyse documentaire et d'automatisation de processus métier.",
            "Intégration d'IA conversationnelle dans des apps existantes avec des patterns LLMOps sécurisés.",
            "Rédaction de specs et présentation des solutions aux parties prenantes.",
          ],
        },
        {
          title: "Stagiaire ingénieur logiciel",
          date: "Été 2023",
          points: [
            "Contribution à des applications web internes avec des frameworks JavaScript modernes.",
            "Composants UI responsive et compatibilité multi-navigateurs.",
            "Sprints agiles, revues de code et documentation technique.",
            "Pratique de la conception de bases de données et des APIs REST.",
          ],
        },
      ],
    },
    skills: {
      p: "Boîte à outils",
      h2: "Compétences",
      intro:
        "Une boîte à outils concrète pour les systèmes d'IA, les produits full-stack, le cloud, et le soin qui les rend fiables en production.",
      categories: [
        {
          name: "Langages",
          skills: [
            "Java",
            "Python",
            "C",
            "C++",
            "C#",
            "JavaScript",
            "TypeScript",
            "PHP",
            "SQL",
            "Bash",
          ],
        },
        {
          name: "IA & Data Science",
          skills: [
            "Agents IA",
            "LangGraph",
            "Vector DB",
            "Prompt Engineering",
            "LangChain",
            "RAG",
            "OpenAI API",
            "ChromaDB",
            "FAISS",
            "NLP",
            "Machine Learning",
            "Deep Learning",
            "TensorFlow",
            "scikit-learn",
          ],
        },
        {
          name: "Frontend",
          skills: [
            "React",
            "Next.js",
            "Angular",
            "Vue.js",
            "Redux",
            "Vite",
            "Webpack",
            "HTML5",
            "CSS3",
            "Sass",
            "Bootstrap",
            "Tailwind",
            "Framer Motion",
            "Responsive Design",
          ],
        },
        {
          name: "Backend",
          skills: [
            "Node.js",
            "NestJS",
            "Express.js",
            "FastAPI",
            "Spring Boot",
            "Spring Cloud",
            "Laravel",
            "RESTful APIs",
            "GraphQL",
            "WebSockets",
            "RabbitMQ",
            "Microservices",
            "OAuth2",
            "JWT",
            "JEE",
            "Hibernate",
          ],
        },
        {
          name: "Mobile",
          skills: [
            "React Native",
            "Flutter",
            "Expo",
            "iOS",
            "Android",
            "Mobile UI/UX",
          ],
        },
        {
          name: "Bases de données",
          skills: [
            "MySQL",
            "PostgreSQL",
            "Oracle DB",
            "SQL Server",
            "MongoDB",
            "Firebase",
            "Prisma",
            "TypeORM",
            "Redis",
            "Vector DB",
            "ChromaDB",
            "Database Design",
          ],
        },
        {
          name: "DevOps & Cloud",
          skills: [
            "Docker",
            "Kubernetes",
            "OpenShift",
            "AWS",
            "Azure",
            "Google Cloud",
            "Nginx",
            "Terraform",
            "Helm",
            "Git / GitHub",
            "GitLab CI",
            "CI/CD",
            "Linux",
            "Windows Server",
            "SSL/TLS",
          ],
        },
        {
          name: "Tests & QA",
          skills: [
            "Jest",
            "Cypress",
            "JUnit",
            "Mockito",
            "Selenium",
            "Postman",
            "SonarQube",
            "TDD",
          ],
        },
        {
          name: "Méthodologies",
          skills: [
            "Agile / Scrum",
            "Kanban",
            "UML",
            "Design Patterns",
            "SOLID",
            "Code Review",
            "Documentation technique",
            "ERP",
            "Intégration Sage",
            "SWOT",
          ],
        },
        {
          name: "ERP & Business",
          skills: [
            "Sage 100",
            "Sage X3",
            "Architecture ERP",
            "Modules financiers",
            "Gestion des stocks",
            "CRM",
            "Business Intelligence",
          ],
        },
        {
          name: "Sécurité & Cybersécurité IA",
          skills: [
            "Cybersécurité IA",
            "OWASP",
            "Défense contre l'injection de prompts",
            "Détection de menaces IA",
            "OAuth2",
            "JWT",
            "HTTPS",
            "Chiffrement",
            "Prometheus",
            "Grafana",
          ],
        },
        {
          name: "Outils & Collaboration",
          skills: [
            "VS Code",
            "IntelliJ IDEA",
            "Postman",
            "Jira",
            "Confluence",
            "Figma",
            "Swagger",
            "GitHub Actions",
          ],
        },
      ],
    },
    works: {
      p: "Travaux choisis",
      h2: "Projets",
      content:
        "Ce que j'ai livré : agents IA, systèmes RAG et produits full-stack.",
      categoriesAria: "Catégories de projets",
      categories: [
        { id: "all", label: "Tous" },
        { id: "ai", label: "IA & Agents" },
        { id: "enterprise", label: "Entreprise" },
        { id: "mobile", label: "Mobile" },
        { id: "fullstack", label: "Full Stack" },
      ],
      categoryLabels: {
        ai: "IA & Agents",
        enterprise: "Entreprise",
        mobile: "Mobile",
        fullstack: "Full Stack",
      },
      empty: "Aucun projet dans cette catégorie.",
      source: "Code source",
      live: "Voir en ligne",
    },
    certifications: {
      p: "Parcours",
      h2: "Certifications",
      intro:
        "Une sélection de certifications en IA, sécurité, data et développement.",
      categoriesAria: "Catégories de certifications",
      categories: [
        { id: "all", label: "Toutes" },
        { id: "ai", label: "IA & ML" },
        { id: "security", label: "Cybersécurité" },
        { id: "data", label: "Data" },
        { id: "dev", label: "Développement" },
      ],
      empty: "Aucune certification dans cette catégorie.",
      issued: "Délivré",
      id: "ID",
    },
    contact: {
      p: "Discutons",
      h2: "Contact",
      intro:
        "Envie de parler produits IA, agents, ou d'un rôle qui demande jugement et vitesse de livraison ? Écrivez-moi.",
      orEmail: "Ou par email :",
      form: {
        name: { span: "Votre nom", placeholder: "Comment vous appelez-vous ?" },
        email: { span: "Votre email", placeholder: "Quel est votre email ?" },
        message: {
          span: "Votre message",
          placeholder: "Comment puis-je vous aider ?",
        },
      },
      send: "Envoyer",
      sending: "Envoi…",
      success: "Merci. Je vous répondrai bientôt.",
      error: "Une erreur s'est produite.",
    },
    footer: {
      blurb:
        "Ingénieure AI & logiciel : agents, systèmes RAG et produits vraiment utiles.",
      cta: "Commencer une conversation",
      explore: "Explorer",
      connect: "Connecter",
      downloadCv: "Télécharger le CV",
      selectedWork: "Travaux choisis",
      location: "Basée au Maroc · Ouverte au remote",
      portfolio: "Portfolio v. I",
    },
    lang: {
      switchToEn: "Switch to English",
      switchToFr: "Passer en français",
    },
    chat: {
      open: "Poser une question",
      close: "Fermer",
      eyebrow: "Assistant ancré",
      title: "Interroger le portfolio",
      hint: "Les réponses viennent du contenu de ce site — profil, rôles, projets, compétences — pas d’un entraînement externe.",
      welcome:
        "Bonjour — je réponds à partir du portfolio de Rim : expérience, projets AI, compétences, ou comment la contacter.",
      placeholder: "Question sur l’expérience, les projets, les skills…",
      send: "Demander",
      thinking: "Réflexion…",
      suggestionsLabel: "Questions suggérées",
      suggestions: [
        "Sur quoi travaille Rim ?",
        "Montrer les projets AI / RAG",
        "Quelle est sa stack ?",
        "Comment la contacter ?",
      ],
    },
  },
};
