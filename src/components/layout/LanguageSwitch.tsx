import { useEffect, useRef, useState, type ReactElement } from "react";
import { useLanguage, type Lang } from "../../i18n";

const FlagUK = (): ReactElement => (
  <svg
    className="lang-switch__flag-icon"
    viewBox="0 0 60 40"
    width="22"
    height="15"
    aria-hidden="true"
  >
    <rect width="60" height="40" fill="#012169" />
    <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
    <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="5" />
    <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="12" />
    <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="7" />
  </svg>
);

const FlagFR = () => (
  <svg
    className="lang-switch__flag-icon"
    viewBox="0 0 60 40"
    width="22"
    height="15"
    aria-hidden="true"
  >
    <rect width="20" height="40" fill="#002395" />
    <rect x="20" width="20" height="40" fill="#fff" />
    <rect x="40" width="20" height="40" fill="#ED2939" />
  </svg>
);

const options: {
  code: Lang;
  label: string;
  Flag: () => ReactElement;
}[] = [
  { code: "en", label: "English", Flag: FlagUK },
  { code: "fr", label: "Français", Flag: FlagFR },
];

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = options.find((o) => o.code === lang) ?? options[0];
  const CurrentFlag = current.Flag;

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const choose = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        type="button"
        className={`lang-switch__trigger ${open ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        title={current.label}
        onClick={() => setOpen((value) => !value)}
      >
        <CurrentFlag />
        <span className="lang-switch__chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul className="lang-switch__menu" role="listbox" aria-label="Language">
          {options.map((option) => {
            const Flag = option.Flag;
            return (
              <li
                key={option.code}
                role="option"
                aria-selected={option.code === lang}
              >
                <button
                  type="button"
                  className={`lang-switch__option ${
                    option.code === lang ? "is-active" : ""
                  }`}
                  onClick={() => choose(option.code)}
                >
                  <Flag />
                  <span>{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitch;
