import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";
import { useLanguage } from "../../i18n";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY <= 80) setActive("");
    };

    const highlight = () => {
      document.querySelectorAll("section[id]").forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", highlight);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", highlight);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} site-nav fixed top-0 z-20 flex w-full items-center transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-primary/90 shadow-[0_8px_30px_rgba(28,25,23,0.04)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link
          to="/"
          className="no-underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="font-section cursor-pointer text-[20px] font-semibold text-ink">
            {config.html.fullName}
          </p>
        </Link>

        <div className="hidden items-center sm:flex">
          <ul className="flex list-none gap-5">
            {t.nav.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`no-underline text-[15px] transition-colors duration-200 ${
                    active === nav.id
                      ? "text-modern"
                      : "text-ink hover:text-modern"
                  }`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
        </div>

        <div className="flex flex-1 items-center justify-end gap-1 sm:hidden">
          <LanguageSwitch />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setToggle(!toggle)}
            className="border-0 bg-transparent p-0"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="nav-menu-icon h-6 w-6 object-contain"
            />
          </button>

          {toggle && (
            <div className="absolute right-4 top-14 z-10 min-w-[180px] border border-line bg-tertiary p-4 shadow-[0_12px_40px_rgba(28,25,23,0.08)]">
              <ul className="flex list-none flex-col gap-3">
                {t.nav.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      className="no-underline text-ink"
                      onClick={() => setToggle(false)}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
