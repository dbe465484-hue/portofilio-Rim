import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { toRoman } from "../../utils/roman";
import { useLanguage } from "../../i18n";

const getProjectCategory = (project: TProject): string =>
  project.category ?? "fullstack";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -56 : 56,
    opacity: 0,
  }),
};

const Works = () => {
  const { t } = useLanguage();
  const linkLabel = (url: string) =>
    url.includes("github.com") ? t.works.source : t.works.live;
  const [activeCategory, setActiveCategory] = useState("all");
  const [[page, direction], setPage] = useState([0, 0]);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => getProjectCategory(p) === activeCategory),
    [activeCategory]
  );

  const count = filteredProjects.length;
  const index = count === 0 ? 0 : ((page % count) + count) % count;
  const project = filteredProjects[index];

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
      <Header useMotion={false} index={4} p={t.works.p} h2={t.works.h2} />

      <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink">
        {t.works.content}
      </p>

      <div
        className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
        role="tablist"
        aria-label={t.works.categoriesAria}
      >
        {t.works.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`jc-chip ${
              activeCategory === category.id ? "jc-chip-active" : ""
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {count === 0 ? (
        <p className="mt-8 text-secondary">{t.works.empty}</p>
      ) : (
        <div className="project-carousel mt-10">
          <p className="mb-4 font-subtitle text-[1.1rem] text-ink">
            <span className="roman-mark">{toRoman(index + 1)}</span>
            <span className="mx-2 text-secondary">/</span>
            <span className="text-secondary">{toRoman(count)}</span>
          </p>

          <div className="project-carousel__stage">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={`${activeCategory}-${project.name}`}
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
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[0.85rem] uppercase tracking-[0.14em] text-secondary">
                    {t.works.categoryLabels[getProjectCategory(project)] ??
                      getProjectCategory(project)}
                  </span>
                  {!project.sourceCodeLink.includes("github.com") && (
                    <span className="text-[0.8rem] tracking-wide text-modern">
                      · Live
                    </span>
                  )}
                </div>

                <div className="project-carousel__frame">
                  <button
                    type="button"
                    className="carousel-nav carousel-nav--prev"
                    aria-label="Previous project"
                    onClick={() => paginate(-1)}
                  >
                    ←
                  </button>

                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-plate no-underline block"
                    aria-label={`${project.name}, ${linkLabel(project.sourceCodeLink)}`}
                    draggable={false}
                  >
                    <img
                      src={project.image}
                      alt=""
                      draggable={false}
                      className="project-plate__img"
                    />
                  </a>

                  <button
                    type="button"
                    className="carousel-nav carousel-nav--next"
                    aria-label="Next project"
                    onClick={() => paginate(1)}
                  >
                    →
                  </button>
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <h3 className="font-section text-[1.55rem] font-semibold leading-snug text-ink">
                      {project.name}
                    </h3>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[0.95rem]"
                    >
                      {linkLabel(project.sourceCodeLink)}
                    </a>
                  </div>

                  {project.impact && (
                    <p className="mt-2 font-subtitle text-[1.05rem] font-medium leading-snug text-ink">
                      {project.impact}
                    </p>
                  )}

                  <p className="mt-3 text-[1.05rem] leading-[1.7] text-ink">
                    {project.description}
                  </p>

                  <p className="mt-3 text-[0.9rem] leading-relaxed text-secondary">
                    {project.tags
                      .slice(0, 5)
                      .map((tag) => tag.name)
                      .join(" · ")}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div
            className="carousel-dots mt-8"
            role="tablist"
            aria-label="Project slides"
          >
            {filteredProjects.map((item, i) => (
              <button
                key={item.name}
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

export default SectionWrapper(Works, "projects");
