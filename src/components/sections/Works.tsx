import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

// Categorize projects
const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Chatbots" },
  { id: "enterprise", label: "Enterprise" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "fullstack", label: "Full Stack" },
];

const getProjectCategory = (name: string): string => {
  const aiKeywords = ["AI", "Chatbot", "Smart", "CV Analyzer", "HR Automation", "Polynomial"];
  const enterpriseKeywords = ["Sunlog", "ERP", "Intranet", "CRM", "Portage", "Forum"];
  const mobileKeywords = ["Mobile", "E-Library", "GlamShop"];
  
  if (aiKeywords.some(k => name.includes(k))) return "ai";
  if (enterpriseKeywords.some(k => name.includes(k))) return "enterprise";
  if (mobileKeywords.some(k => name.includes(k))) return "mobile";
  return "fullstack";
};

const ProjectCard: React.FC<{ project: TProject; isActive: boolean }> = ({
  project,
  isActive,
}) => {
  const { name, description, tags, image, sourceCodeLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl bg-tertiary transition-all duration-500 ${
        isActive ? "ring-2 ring-[#f472b6]" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="relative h-[200px] lg:h-[300px] lg:w-[45%] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div
            onClick={() => window.open(sourceCodeLink, "_blank")}
            className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-all hover:bg-[#f472b6] hover:scale-110"
            title={sourceCodeLink.includes("github.com") ? "View source code" : "Visit live site"}
          >
            {sourceCodeLink.includes("github.com") ? (
              <img src={github} alt="github" className="h-5 w-5 object-contain" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
          <h3 className="text-[22px] lg:text-[28px] font-bold text-white mb-3">
            {name}
          </h3>
          <p className="text-secondary text-[14px] lg:text-[15px] leading-relaxed mb-4 line-clamp-3 lg:line-clamp-none">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="rounded-full bg-black-100 px-3 py-1 text-[12px] font-medium"
              >
                <span className={tag.color}>#{tag.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => getProjectCategory(p.name) === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentIndex(0);
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-[#f472b6] text-white shadow-lg shadow-[#f472b6]/25"
                : "bg-tertiary text-secondary hover:bg-black-100 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Project Counter */}
      <div className="mt-8 text-center">
        <span className="text-[#f472b6] font-bold text-lg">
          {currentIndex + 1}
        </span>
        <span className="text-secondary text-lg"> / {filteredProjects.length}</span>
      </div>

      {/* Main Carousel */}
      <div className="relative mt-6" ref={scrollRef}>
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 && (
            <ProjectCard
              key={filteredProjects[currentIndex].name}
              project={filteredProjects[currentIndex]}
              isActive={true}
            />
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary text-white transition-all hover:bg-[#f472b6] hover:scale-110 shadow-lg z-10"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary text-white transition-all hover:bg-[#f472b6] hover:scale-110 shadow-lg z-10"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-[#f472b6]"
                : "w-2 bg-secondary/30 hover:bg-secondary/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Preview Thumbnails */}
      <div className="mt-8 hidden lg:flex justify-center gap-3 overflow-x-auto pb-4">
        {filteredProjects.map((project, index) => (
          <button
            key={project.name}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-[#f472b6] scale-105"
                : "opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
