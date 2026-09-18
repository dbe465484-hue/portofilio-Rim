import { config } from "../../constants/config";
import { useLanguage } from "../../i18n";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-rich border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="section-display text-[clamp(2rem,4vw,2.75rem)] text-ink">
              {config.html.fullName}
            </p>
            <p className="mt-4 max-w-sm text-[1.05rem] leading-relaxed text-ink">
              {t.footer.blurb}
            </p>
            <a
              href="#contact"
              className="lynn-link-btn no-underline mt-6 inline-flex"
            >
              {t.footer.cta}
            </a>
          </div>

          <div>
            <p className="font-subtitle text-[0.8rem] uppercase tracking-[0.16em] text-modern">
              {t.footer.explore}
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2.5">
              {t.nav.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="no-underline text-[1.05rem] text-ink"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-subtitle text-[0.8rem] uppercase tracking-[0.16em] text-modern">
              {t.footer.connect}
            </p>
            <ul className="mt-4 flex list-none flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${config.html.email}`}
                  className="no-underline text-[1.05rem] text-ink"
                >
                  {t.hero.email}
                </a>
              </li>
              <li>
                <a
                  href={config.html.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-[1.05rem] text-ink"
                >
                  {t.hero.github}
                </a>
              </li>
              <li>
                <a
                  href="/CV_Rim_Belabadia.pdf"
                  download="CV_Rim_Belabadia.pdf"
                  className="no-underline text-[1.05rem] text-ink"
                >
                  {t.footer.downloadCv}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="no-underline text-[1.05rem] text-ink"
                >
                  {t.footer.selectedWork}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="modern-rule mt-14" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-[0.95rem] text-ink">{t.footer.location}</p>
          <p className="text-[0.9rem] text-secondary">
            © {year} {config.html.fullName}
            <span className="mx-2">·</span>
            {t.footer.portfolio}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
