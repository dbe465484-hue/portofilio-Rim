import React, { useState } from "react";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { profilePhoto } from "../../assets";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

// SVG paths for service icons
const serviceIcons: Record<string, string> = {
  "Full Stack Developer": "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
  "Mobile Developer": "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  "AI Conversational Solutions Engineer": "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  "AI Application Developer": "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
};

const highlights = [
  { iconPath: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5", label: "MIAGE Engineer" },
  { iconPath: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5", label: "AI Specialist" },
  { iconPath: "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z", label: "Full Stack Dev" },
  { iconPath: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", label: "Mobile Apps" },
];

const skills = [
  "React", "Next.js", "TypeScript", "NestJS", "Node.js", "Python",
  "Sage", "ERP", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS",
  "CI/CD", "GraphQL", "Prisma", "LangChain", "React Native", "Flutter",
  "Spring Boot", "AI/ML", "Microservices", "OAuth2", "Jest", "Cypress",
];

const interests = [
  { iconPath: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5", title: "AI Innovation", desc: "Exploring cutting-edge AI solutions" },
  { iconPath: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", title: "Startups", desc: "Building products from 0 to 1" },
  { iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25", title: "Continuous Learning", desc: "Always expanding my skill set" },
  { iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", title: "Collaboration", desc: "Working with diverse teams" },
];

const ServiceCard: React.FC<IServiceCard> = ({ index, title, isHovered, onHover }) => {
  const iconPath = serviceIcons[title] || "";
  
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
        isHovered
          ? "bg-gradient-to-br from-[#f472b6]/20 to-[#ec4899]/10 scale-105 shadow-xl shadow-[#f472b6]/20"
          : "bg-tertiary hover:bg-black-100"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
            isHovered ? "bg-[#f472b6] rotate-6" : "bg-black-100"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`h-8 w-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-[#f472b6]"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <h3 className="text-[16px] font-bold text-white">{title}</h3>
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute -bottom-2 -right-2 h-16 w-16 rounded-full transition-all duration-300 ${
          isHovered ? "bg-[#f472b6]/30 scale-150" : "bg-transparent scale-0"
        }`}
      />
    </motion.div>
  );
};

const About = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      {/* Main Content Grid */}
      <div className="mt-8 grid lg:grid-cols-5 gap-8">
        {/* Left Column - Bio */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-6"
        >
          {/* Highlights Row */}
          <div className="flex flex-wrap gap-3">
            {highlights.map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 rounded-full bg-tertiary px-4 py-2 text-[14px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-[#f472b6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
                <span className="text-white font-medium">{item.label}</span>
              </motion.span>
            ))}
          </div>

          {/* Bio Text */}
          <motion.div
            variants={fadeIn("", "", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-[17px] leading-[30px] text-secondary">
              {config.sections.about.content}
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-[14px] text-[#f472b6] uppercase tracking-wider mb-3">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-lg bg-black-100 px-3 py-1.5 text-[13px] text-white/80 hover:text-white hover:bg-tertiary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Quick Info Card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl bg-gradient-to-br from-tertiary to-black-100 p-6 h-full">
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] opacity-70 blur-sm" />
                <img
                  src={profilePhoto}
                  alt={config.html.fullName}
                  className="relative h-28 w-28 rounded-full border-4 border-primary object-cover"
                />
              </div>
              <h3 className="text-white text-[20px] font-bold">{config.html.fullName}</h3>
              <p className="text-[#f472b6] text-[14px] font-medium mt-1">AI & Software Engineer</p>
            </div>
            <h4 className="text-[14px] text-[#f472b6] uppercase tracking-wider mb-4">
              What Drives Me
            </h4>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#f472b6]/20 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-[#f472b6]">
                      <path strokeLinecap="round" strokeLinejoin="round" d={interest.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-[15px]">
                      {interest.title}
                    </p>
                    <p className="text-secondary text-[13px]">{interest.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#f472b6] px-6 py-3 text-white font-medium transition-all hover:bg-[#ec4899] hover:shadow-lg hover:shadow-[#f472b6]/25"
            >
              <span>Let's Work Together</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16"
      >
        <h4 className="text-[14px] text-[#f472b6] uppercase tracking-wider mb-6">
          What I Do
        </h4>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            isHovered={hoveredService === index}
            onHover={setHoveredService}
          />
        ))}
      </div>

      {/* Fun Fact Banner */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 rounded-2xl bg-gradient-to-r from-[#f472b6]/10 via-tertiary to-[#ec4899]/10 p-6 border border-[#f472b6]/20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f472b6]/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-[#f472b6]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">Currently exploring</p>
              <p className="text-secondary text-[14px]">
                AI Agents, RAG architectures, and advanced prompt engineering
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#22c55e]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
            </span>
            <span className="text-[14px] font-medium">Open to opportunities</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
