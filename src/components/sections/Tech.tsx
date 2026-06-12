import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { useState } from "react";

// Skills organized by category
const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    color: "#f472b6",
    skills: ["Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript", "PHP", "SQL", "Bash"],
  },
  {
    id: "ai",
    name: "AI & Data Science",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    color: "#60a5fa",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LangChain", "RAG", "OpenAI API", "TensorFlow", "scikit-learn", "Data Analysis", "AI Solutions"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    color: "#34d399",
    skills: ["React", "Next.js", "Angular", "Vue.js", "Redux", "Vite", "Webpack", "HTML5", "CSS3", "Sass", "Bootstrap", "Tailwind", "Framer Motion", "Responsive Design"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "M5.25 14.5c0 3.038 2.462 5.5 5.5 5.5h2.5c3.038 0 5.5-2.462 5.5-5.5v-9A2.25 2.25 0 0016.5 3.25h-9A2.25 2.25 0 005.25 5.5v9z",
    color: "#a78bfa",
    skills: ["Node.js", "NestJS", "Express.js", "FastAPI", "Spring Boot", "Spring Cloud", "Laravel", "RESTful APIs", "GraphQL", "WebSockets", "RabbitMQ", "Microservices", "OAuth2", "JWT", "JEE", "Hibernate"],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    color: "#fb923c",
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "Mobile UI/UX"],
  },
  {
    id: "database",
    name: "Databases",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    color: "#22d3ee",
    skills: ["MySQL", "PostgreSQL", "Oracle DB", "SQL Server", "MongoDB", "Firebase", "Prisma", "TypeORM", "Redis", "Elasticsearch", "Database Design", "Query Optimization"],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
    color: "#f87171",
    skills: ["Docker", "Kubernetes", "OpenShift", "AWS", "Azure", "Google Cloud", "Nginx", "Terraform", "Helm", "Git/GitHub", "GitLab CI", "CI/CD", "Linux", "Windows Server", "SSL/TLS"],
  },
  {
    id: "testing",
    name: "Testing & QA",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    color: "#fbbf24",
    skills: ["Jest", "Cypress", "Playwright", "JUnit", "Mockito", "Selenium", "Postman", "SonarQube", "TDD"],
  },
  {
    id: "methodology",
    name: "Methodologies",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    color: "#e879f9",
    skills: ["Agile/Scrum", "Kanban", "UML", "Design Patterns", "SOLID Principles", "Code Review", "Technical Documentation", "ERP", "Sage Integration", "SWOT"],
  },
  {
    id: "erp",
    name: "ERP & Business",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    color: "#4ade80",
    skills: ["Sage 100", "Sage X3", "ERP Architecture", "Financial Modules", "Inventory Management", "CRM", "RBAC", "API Middleware", "Business Intelligence"],
  },
  {
    id: "security",
    name: "Security & Monitoring",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    color: "#f97316",
    skills: ["OWASP", "OAuth2", "JWT", "HTTPS", "Encryption", "Prometheus", "Grafana", "Sentry", "ELK Stack"],
  },
  {
    id: "tools",
    name: "Tools & Collaboration",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.88m-1.42-8.18a2.548 2.548 0 113.586 3.586L7.5 10.5",
    color: "#94a3b8",
    skills: ["VS Code", "IntelliJ IDEA", "Postman", "Jira", "Confluence", "Figma", "Swagger", "GitHub Actions"],
  },
];

const SkillTag = ({ skill, color, delay }: { skill: string; color: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium
               bg-white/[0.03] border border-white/[0.06] text-white/80
               hover:bg-white/[0.08] hover:border-white/[0.12] hover:text-white
               transition-all duration-200 cursor-default"
    style={{ 
      boxShadow: `0 0 0 0 ${color}00`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`;
      e.currentTarget.style.borderColor = `${color}40`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `0 0 0 0 ${color}00`;
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
    }}
  >
    {skill}
  </motion.span>
);

const CategorySection = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group"
    >
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 mb-3 w-full text-left"
      >
        <div 
          className="p-1.5 rounded-lg transition-colors duration-200"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={category.color}
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
          </svg>
        </div>
        <span className="text-white/90 font-medium text-[15px]">{category.name}</span>
        <span className="text-white/30 text-xs ml-1">({category.skills.length})</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-3 h-3 text-white/30 ml-auto transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Skills */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="flex flex-wrap gap-2 pb-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillTag
              key={skill}
              skill={skill}
              color={category.color}
              delay={skillIndex * 0.03}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <>
      <Header useMotion={true} p="Technical Expertise" h2="Skills." />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 mb-8 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        A comprehensive toolkit spanning full-stack development, AI/ML, and cloud infrastructure.
      </motion.p>

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-white/[0.06]"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#f472b6]">{totalSkills}+</span>
          <span className="text-white/50 text-sm">Technologies</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#60a5fa]">{skillCategories.length}</span>
          <span className="text-white/50 text-sm">Domains</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#34d399]">4+</span>
          <span className="text-white/50 text-sm">Years Experience</span>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
        {skillCategories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Floating decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-white/30 text-sm">
          Always learning, always growing
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
