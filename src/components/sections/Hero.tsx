import { config } from "../../constants/config";
import { heroMe } from "../../assets";
import { useLanguage } from "../../i18n";

const IconDownload = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const IconGitHub = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85.01 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const IconEmail = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();
  const firstName = config.hero.name || config.html.fullName.split(" ")[0];

  return (
    <section
      className="hero relative flex min-h-[100svh] w-full max-w-none items-center overflow-hidden pb-20 pt-24"
      style={{ ["--hero-bg" as string]: `url(${heroMe})` }}
    >
      <div className="hero-bg" role="img" aria-label={config.html.fullName} />
      <div className="hero-veil" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="font-subtitle text-[clamp(1.15rem,2.2vw,1.5rem)] text-ink">
            {t.hero.greeting.replace("{name}", firstName)}
          </p>

          <h1 className="hero-display mt-4 text-[clamp(2.5rem,8vw,5.75rem)] text-ink">
            {t.hero.roleLine1}
            <span className="hero-underline block">{t.hero.roleLine2}</span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.125rem] leading-relaxed text-ink">
            {t.hero.p[0]}
          </p>

          <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-secondary">
            {t.hero.p[1]}
          </p>

          <p className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="/CV_Rim_Belabadia.pdf"
              download="CV_Rim_Belabadia.pdf"
              className="lynn-link-btn hero-action no-underline"
            >
              <IconDownload />
              {t.hero.downloadCv}
            </a>
            <a
              href={config.html.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-action"
            >
              <IconGitHub />
              {t.hero.github}
            </a>
            <a href={`mailto:${config.html.email}`} className="hero-action">
              <IconEmail />
              {t.hero.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
