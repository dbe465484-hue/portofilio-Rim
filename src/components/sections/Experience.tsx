import { SectionWrapper } from "../../hoc";
import { experiences } from "../../constants";
import { Header } from "../atoms/Header";
import { toRoman } from "../../utils/roman";
import { useLanguage } from "../../i18n";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl">
      <Header
        useMotion={false}
        index={2}
        p={t.experience.p}
        h2={t.experience.h2}
      />

      <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink">
        {t.experience.intro}
      </p>

      <div className="mt-12">
        {experiences.map((experience, index) => {
          const role = t.experience.roles[index];

          return (
            <article
              key={`${experience.companyName}-${experience.title}`}
              className={`py-8 ${
                index < experiences.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <p className="text-[0.95rem] text-secondary">
                <span className="roman-mark mr-2">{toRoman(index + 1)}.</span>
                {role?.date ?? experience.date}
              </p>

              <h3 className="mt-2 font-section text-[1.65rem] font-semibold leading-snug text-ink">
                {role?.title ?? experience.title}
              </h3>

              <p className="mt-1 text-[1.1rem] italic text-ink">
                {experience.companyName}
              </p>

              <ol className="roman-list mt-5 space-y-3">
                {(role?.points ?? experience.points)
                  .slice(0, 4)
                  .map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-[1.05rem] leading-[1.7] text-ink"
                    >
                      {point}
                    </li>
                  ))}
              </ol>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
