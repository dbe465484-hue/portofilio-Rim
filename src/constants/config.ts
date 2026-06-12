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
    title: "Rim Belabadia — AI & Software Engineer",
    fullName: "Rim Belabadia",
    email: "rimbelabadia1234@gmail.com",
  },
  hero: {
    name: "Rim",
    p: ["AI Engineer & Full Stack Developer", "Building intelligent solutions that make a difference."],
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
      h2: "Overview.",
      content: `MIAGE Engineer passionate about building intelligent digital solutions. I specialize in AI-powered applications, conversational systems, and full-stack development.

My expertise spans from designing chatbots and AI assistants to developing scalable web and mobile applications. I combine strong analytical skills with a creative approach to solve complex technical challenges.

Currently working as a Software Engineer, I bring hands-on experience with modern technologies including React, Node.js, Python, and various AI/ML frameworks. I'm driven by the potential of AI to transform user experiences and business processes.

Always eager to learn and innovate, I'm particularly interested in projects at the intersection of AI, UX, and emerging technologies.`,
    },
    experience: {
      p: "My Journey",
      h2: "Experience.",
    },
    feedbacks: {
      p: "Recommendations",
      h2: "What Colleagues Say.",
    },
    works: {
      p: "My Portfolio",
      h2: "Projects.",
      content: `From enterprise intranets to AI-powered chatbots and mobile applications. These projects showcase my expertise across full-stack development, artificial intelligence, and cross-platform solutions.`,
    },
  },
};
