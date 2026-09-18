import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { toRoman } from "../../utils/roman";
import { useLanguage } from "../../i18n";

type TCertification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
};

const certifications: TCertification[] = [
  { name: "Gen AI Foundational Models for NLP & Language Understanding", issuer: "IBM", date: "Mars 2025", credentialId: "1RQ1OGJZI5LQ" },
  { name: "Generative AI Advance Fine-Tuning for LLMs", issuer: "IBM", date: "Mars 2025", credentialId: "TAP08JML818D" },
  { name: "Fundamentals of AI Agents Using RAG and LangChain", issuer: "IBM", date: "Fév. 2025", credentialId: "XOZ4DO6KTSKH" },
  { name: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", date: "Jan. 2025", credentialId: "ZOOR1L03IS69" },
  { name: "Machine Learning with Python", issuer: "IBM", date: "Déc. 2024", credentialId: "H3QHKGUVNMVZ" },
  { name: "Foundations of AI and Machine Learning", issuer: "Microsoft", date: "Mars 2025", credentialId: "05QJ5JSZVWIK" },
  { name: "Microsoft Azure for AI and Machine Learning", issuer: "Microsoft", date: "Mars 2025", credentialId: "71WA0ASGGDRV" },
  { name: "Advanced Cybersecurity Topics", issuer: "Johns Hopkins University", date: "Mars 2025", credentialId: "8Z7PEFSKM3V1" },
  { name: "Cybersecurity Fundamentals", issuer: "Johns Hopkins University", date: "Mars 2025", credentialId: "ROU6HOG1KZZS" },
  { name: "Data Science Math Skills", issuer: "Duke University", date: "Mars 2025", credentialId: "A8UB9354AB3I" },
  { name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "Mars 2024", credentialId: "W4X3HKVMSK66" },
  { name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud", issuer: "Google Cloud", date: "Nov. 2024", credentialId: "WWSB4ZJ11TD5" },
  { name: "React Native", issuer: "Meta", date: "Mai 2024", credentialId: "VTTKJ89XBH33" },
  { name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", issuer: "IBM", date: "Avr. 2024", credentialId: "AVPG6JBJF7ZS" },
];

const getCertCategory = (cert: TCertification): string => {
  const name = cert.name.toLowerCase();
  if (
    name.includes("ai") ||
    name.includes("machine learning") ||
    name.includes("generative") ||
    name.includes("llm") ||
    name.includes("rag") ||
    name.includes("nlp")
  ) {
    return "ai";
  }
  if (name.includes("cyber") || name.includes("security")) return "security";
  if (name.includes("data") || name.includes("capstone")) return "data";
  return "dev";
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
  }),
};

const Certifications = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [[page, direction], setPage] = useState([0, 0]);

  const filteredCerts = useMemo(
    () =>
      activeCategory === "all"
        ? certifications
        : certifications.filter((cert) => getCertCategory(cert) === activeCategory),
    [activeCategory]
  );

  const count = filteredCerts.length;
  const index = count === 0 ? 0 : ((page % count) + count) % count;
  const cert = filteredCerts[index];

  useEffect(() => {
    setPage([0, 0]);
  }, [activeCategory]);

  const paginate = (dir: number) => {
    if (count === 0) return;
    setPage([page + dir, dir]);
  };

  const goTo = (next: number) => {
    if (count === 0) return;
    setPage([next, next > index ? 1 : -1]);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;
    if (swipe < -60 || velocity < -500) paginate(1);
    else if (swipe > 60 || velocity > 500) paginate(-1);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Header
        useMotion={false}
        index={5}
        p={t.certifications.p}
        h2={t.certifications.h2}
      />

      <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink">
        {t.certifications.intro}
      </p>

      <div
        className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
        role="tablist"
        aria-label={t.certifications.categoriesAria}
      >
        {t.certifications.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`jc-chip ${
              activeCategory === cat.id ? "jc-chip-active" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {count === 0 ? (
        <p className="mt-8 text-secondary">{t.certifications.empty}</p>
      ) : (
        <div className="cert-carousel mt-10">
          <p className="mb-4 font-subtitle text-[1.1rem] text-ink">
            <span className="roman-mark">{toRoman(index + 1)}</span>
            <span className="mx-2 text-secondary">/</span>
            <span className="text-secondary">{toRoman(count)}</span>
          </p>

          <div className="project-carousel__stage">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${activeCategory}-${cert.credentialId || cert.name}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={onDragEnd}
                className="project-carousel__slide"
              >
                <div className="project-carousel__frame">
                  <button
                    type="button"
                    className="carousel-nav carousel-nav--prev"
                    aria-label="Previous certification"
                    onClick={() => paginate(-1)}
                  >
                    ←
                  </button>

                  <article className="cert-plate" aria-label={cert.name}>
                    <p className="cert-plate__eyebrow">
                      {t.certifications.h2} · {toRoman(index + 1)}
                    </p>

                    <hr className="modern-rule mx-auto" />

                    <p className="cert-plate__field">
                      {t.certifications.categories.find(
                        (c) => c.id === getCertCategory(cert)
                      )?.label ?? getCertCategory(cert)}
                    </p>

                    <h3 className="cert-plate__title">{cert.name}</h3>

                    <p className="cert-plate__awarded">{t.certifications.issued}</p>
                    <p className="cert-plate__issuer">{cert.issuer}</p>

                    <div className="cert-plate__meta">
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <>
                          <span className="cert-plate__sep">·</span>
                          <span className="cert-plate__id">
                            No. {cert.credentialId}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="cert-plate__seal" aria-hidden="true">
                      <span>{cert.issuer.slice(0, 1)}</span>
                    </div>
                  </article>

                  <button
                    type="button"
                    className="carousel-nav carousel-nav--next"
                    aria-label="Next certification"
                    onClick={() => paginate(1)}
                  >
                    →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="carousel-dots mt-8"
            role="tablist"
            aria-label="Certification slides"
          >
            {filteredCerts.map((item, i) => (
              <button
                key={item.credentialId || item.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${item.name}`}
                className={`carousel-dot ${i === index ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="sr-only">{toRoman(i + 1)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
