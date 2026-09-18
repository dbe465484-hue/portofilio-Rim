type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    github: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rim Belabadia, AI & Software Engineer",
    fullName: "Rim Belabadia",
    email: "rimbelabadia1234@gmail.com",
    github: "https://github.com/dbe465484-hue",
  },
  hero: {
    name: "Rim",
    p: [
      "I build AI systems that feel useful, not just impressive.",
      "AI Agents, LangGraph, Vector DBs & Prompt Engineering, with a full-stack craft behind them.",
    ],
  },
  contact: {
    p: "Let's Connect",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "How can I help you?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About",
      content: `Hello, I'm Rim, a MIAGE engineer who loves turning messy ideas into calm, working products. Most of my energy goes into AI Agents, LangGraph workflows, Vector Databases, Prompt Engineering, and the full-stack systems that make them reliable in production.

I care about the details that users never see: grounding RAG answers, evaluating prompts, defending against injection, and shipping interfaces that feel simple.

Right now I work as a Software Engineer, building agentic tools with LangChain, LangGraph, OpenAI, React, Node.js, and Python. If you're curious about thoughtful AI products (not just demos), we'll probably get along.`,
    },
    experience: {
      p: "Roles",
      h2: "Experience",
    },
    feedbacks: {
      p: "Credentials",
      h2: "Certifications",
    },
    works: {
      p: "Selected work",
      h2: "Projects",
      content: `Things I've shipped, AI agents, RAG systems, and full-stack products.`,
    },
  },
};
