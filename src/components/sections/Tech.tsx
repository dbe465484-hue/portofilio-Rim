import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { toRoman } from "../../utils/roman";
import { useLanguage } from "../../i18n";

const Tech = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl">
      <Header useMotion={false} index={3} p={t.skills.p} h2={t.skills.h2} />

      <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink">
        {t.skills.intro}
      </p>

      <div className="skills-index mt-10">
        {t.skills.categories.map((category, index) => (
          <section key={category.name} className="skills-index__group">
            <h3 className="skills-index__title font-section">
              <span className="roman-mark">{toRoman(index + 1)}.</span>
              <span className="skills-index__name">{category.name}</span>
              <span className="skills-index__count font-subtitle">
                ({category.skills.length})
              </span>
            </h3>
            <p className="skills-index__text">{category.skills.join(" · ")}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
