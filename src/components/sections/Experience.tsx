import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";

const ExperienceCard: React.FC<{
  experience: TExperience;
  index: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ experience, index, isActive, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
        isActive
          ? "bg-gradient-to-br from-[#1a1a2e] to-[#16161d] ring-2 ring-[#f472b6] shadow-xl shadow-[#f472b6]/10"
          : "bg-tertiary hover:bg-black-100"
      }`}
    >
      {/* Company Icon & Header */}
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isActive ? "bg-[#f472b6]/20" : "bg-black-100"
          }`}
          style={{ backgroundColor: isActive ? undefined : experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-8 w-8 object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-[18px] lg:text-[20px] font-bold text-white truncate">
              {experience.title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-[12px] font-medium ${
                isActive
                  ? "bg-[#f472b6] text-white"
                  : "bg-black-100 text-secondary"
              }`}
            >
              {experience.date}
            </span>
          </div>
          <p className="text-[#f472b6] text-[14px] font-medium mt-1">
            {experience.companyName}
          </p>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-3">
                {experience.points.map((point, pointIndex) => (
                  <motion.li
                    key={`point-${pointIndex}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: pointIndex * 0.1 }}
                    className="flex items-start gap-3 text-[14px] text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f472b6]" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Indicator */}
      <div className="absolute bottom-4 right-4">
        <motion.svg
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-5 w-5 ${isActive ? "text-[#f472b6]" : "text-secondary"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        A timeline of my professional growth, from internships to full-time roles in AI and software engineering.
      </motion.p>

      {/* Timeline Progress Bar */}
      <div className="mt-12 mb-8 hidden lg:block">
        <div className="relative h-1 bg-tertiary rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#f472b6] to-[#ec4899] rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${((activeIndex + 1) / experiences.length) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-[12px] transition-all duration-300 ${
                index <= activeIndex
                  ? "text-[#f472b6] font-medium"
                  : "text-secondary/50 hover:text-secondary"
              }`}
            >
              {exp.date.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="mt-8 lg:mt-0 space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: "Years Experience", value: "3+" },
          { label: "Projects Completed", value: "12+" },
          { label: "Companies", value: "4" },
          { label: "Technologies", value: "15+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-xl bg-tertiary p-4 text-center transition-all hover:bg-black-100"
          >
            <p className="text-[28px] lg:text-[32px] font-bold text-[#f472b6]">
              {stat.value}
            </p>
            <p className="text-[12px] text-secondary uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
