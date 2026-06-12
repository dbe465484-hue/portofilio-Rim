import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

type TCertification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
};

const certifications: TCertification[] = [
  // AI & Machine Learning
  { name: "Gen AI Foundational Models for NLP & Language Understanding", issuer: "IBM", date: "Mars 2025", credentialId: "1RQ1OGJZI5LQ" },
  { name: "Generative AI Advance Fine-Tuning for LLMs", issuer: "IBM", date: "Mars 2025", credentialId: "TAP08JML818D" },
  { name: "Fundamentals of AI Agents Using RAG and LangChain", issuer: "IBM", date: "Fév. 2025", credentialId: "XOZ4DO6KTSKH", skills: ["RAG", "Prompt Engineering", "Vector Databases", "LangChain"] },
  { name: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", date: "Jan. 2025", credentialId: "ZOOR1L03IS69" },
  { name: "Machine Learning with Python", issuer: "IBM", date: "Déc. 2024", credentialId: "H3QHKGUVNMVZ" },
  { name: "Generative AI: Elevate Your Data Science Career", issuer: "IBM", date: "Mars 2025", credentialId: "1642EDJXRPNX" },
  { name: "Foundations of AI and Machine Learning", issuer: "Microsoft", date: "Mars 2025", credentialId: "05QJ5JSZVWIK" },
  { name: "Microsoft Azure for AI and Machine Learning", issuer: "Microsoft", date: "Mars 2025", credentialId: "71WA0ASGGDRV" },
  // Cybersecurity
  { name: "Advanced Cybersecurity Topics", issuer: "Johns Hopkins University", date: "Mars 2025", credentialId: "8Z7PEFSKM3V1" },
  { name: "Advanced Cybersecurity Techniques", issuer: "Johns Hopkins University", date: "Mars 2025", credentialId: "E7MLIW72ZQ04" },
  { name: "Cybersecurity Fundamentals", issuer: "Johns Hopkins University", date: "Mars 2025", credentialId: "ROU6HOG1KZZS", skills: ["Social Engineering", "Cryptography", "Penetration Testing"] },
  // Data Science
  { name: "Data Science Math Skills", issuer: "Duke University", date: "Mars 2025", credentialId: "A8UB9354AB3I" },
  { name: "Capstone: Retrieving, Processing, and Visualizing Data with Python", issuer: "University of Michigan", date: "Avr. 2023", credentialId: "2FFSVA4JBUSG", skills: ["Data Analysis", "Data Visualization"] },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "Mars 2024", credentialId: "W4X3HKVMSK66" },
  // Development
  { name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud", issuer: "Google Cloud", date: "Nov. 2024", credentialId: "WWSB4ZJ11TD5" },
  { name: "React Native", issuer: "Meta", date: "Mai 2024", credentialId: "VTTKJ89XBH33" },
  { name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", issuer: "IBM", date: "Avr. 2024", credentialId: "AVPG6JBJF7ZS", skills: ["Docker"] },
  { name: "Introduction to Agile Development and Scrum", issuer: "IBM", date: "Mars 2024", credentialId: "VE2P2WABCA5X" },
  { name: "Software Engineering: Modeling Software Systems using UML", issuer: "Hong Kong UST", date: "Avr. 2023", credentialId: "XKN55WV9ZK6D" },
];

const issuerColors: Record<string, string> = {
  "IBM": "#0f62fe",
  "Microsoft": "#00a4ef",
  "Google": "#4285f4",
  "Google Cloud": "#4285f4",
  "Meta": "#0668e1",
  "Johns Hopkins University": "#002d72",
  "Duke University": "#001a57",
  "University of Michigan": "#00274c",
  "Hong Kong UST": "#003366",
};

const categories = [
  { id: "all", label: "All", count: certifications.length },
  { id: "ai", label: "AI & ML", count: 8 },
  { id: "security", label: "Cybersecurity", count: 3 },
  { id: "data", label: "Data Science", count: 3 },
  { id: "dev", label: "Development", count: 5 },
];

const getCertCategory = (cert: TCertification): string => {
  const name = cert.name.toLowerCase();
  if (name.includes("ai") || name.includes("machine learning") || name.includes("generative") || name.includes("llm") || name.includes("rag") || name.includes("nlp")) return "ai";
  if (name.includes("cyber") || name.includes("security")) return "security";
  if (name.includes("data") || name.includes("capstone")) return "data";
  return "dev";
};

const CertCard: React.FC<{ cert: TCertification; isActive?: boolean }> = ({ cert, isActive = false }) => {
  const color = issuerColors[cert.issuer] || "#f472b6";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`
        relative bg-tertiary/80 rounded-2xl p-6 border border-white/10 
        backdrop-blur-sm h-full
        ${isActive ? 'ring-2 ring-[#f472b6]/50' : ''}
      `}
    >
      {/* Accent gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
      />
      
      {/* Issuer badge */}
      <div className="flex items-center justify-between mb-3 pt-1">
        <div 
          className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {cert.issuer}
        </div>
        <div className="flex items-center gap-1.5 text-white/40 text-[12px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          {cert.date}
        </div>
      </div>
      
      {/* Certificate name */}
      <h4 className="text-white font-semibold text-[15px] leading-snug mb-3 line-clamp-3">
        {cert.name}
      </h4>
      
      {/* Skills tags */}
      {cert.skills && cert.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.slice(0, 3).map((skill) => (
            <span 
              key={skill}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const filteredCerts = activeCategory === "all" 
    ? certifications 
    : certifications.filter(cert => getCertCategory(cert) === activeCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredCerts.length / itemsPerPage);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages, nextSlide]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const visibleCerts = filteredCerts.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl pb-8`}>
        <Header useMotion={true} p="Credentials" h2="Certifications." />
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Continuous learning through industry-recognized certifications from leading tech companies and universities.
        </motion.p>
        
        {/* Category Filter + Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200
                  ${activeCategory === cat.id 
                    ? 'bg-[#f472b6] text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
                  }`}
              >
                {cat.label}
                <span className="ml-1.5 text-[11px] opacity-60">({cat.count})</span>
              </button>
            ))}
          </motion.div>
          
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-sm mr-2">
                {currentIndex + 1} / {totalPages}
              </span>
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Carousel */}
      <div 
        className={`${styles.paddingX} pt-8 pb-14`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleCerts.map((cert) => (
              <CertCard key={cert.credentialId || cert.name} cert={cert} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Dots indicator */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-[#f472b6]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <span className="text-2xl font-bold text-[#f472b6]">{certifications.length}</span>
            <p className="text-white/40 text-sm">Certifications</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#60a5fa]">7</span>
            <p className="text-white/40 text-sm">Issuers</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#34d399]">2023-2025</span>
            <p className="text-white/40 text-sm">Years Active</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
