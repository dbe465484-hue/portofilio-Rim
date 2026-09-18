import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { profilePhoto } from "../../assets";
import { toRoman } from "../../utils/roman";
import { useLanguage } from "../../i18n";

const About = () => {
  const { t } = useLanguage();
  const paragraphs = t.about.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const [lead, ...rest] = paragraphs;

  return (
    <article className="about-essay mx-auto max-w-3xl">
      <h2 className="about-essay__title section-display">{t.about.title}</h2>

      <div className="about-essay__body">
        <img
          src={profilePhoto}
          alt={config.html.fullName}
          className="about-essay__photo"
          width={200}
          height={200}
        />

        {lead && <p className="about-essay__lead">{lead}</p>}

        {rest.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="about-essay__p">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="about-essay__focus">
        <h3 className="about-essay__focus-title">{t.about.focus}</h3>
        <ol className="focus-toc">
          {t.about.focusItems.map((item, index) => (
            <li key={item} className="focus-toc__item">
              <span className="focus-toc__num" aria-hidden="true">
                {toRoman(index + 1)}.
              </span>
              <span className="focus-toc__text">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-10">
        <a href="#contact" className="lynn-link-btn no-underline">
          {t.about.cta}
        </a>
      </p>
    </article>
  );
};

export default SectionWrapper(About, "about");
