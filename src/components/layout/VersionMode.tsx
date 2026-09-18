import { useEffect, useState } from "react";

const STORAGE_KEY = "folio-theme";

const VersionMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // New key so an old broken "ink" preference doesn't lock the site
    localStorage.removeItem("paper-mode");
    const saved = localStorage.getItem(STORAGE_KEY);
    const isDark = saved === "ink";
    setDark(isDark);
    document.documentElement.classList.toggle("ink-mode", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("ink-mode", next);
    localStorage.setItem(STORAGE_KEY, next ? "ink" : "paper");
  };

  return (
    <button
      type="button"
      className="version-mode no-underline"
      onClick={toggle}
      aria-label={dark ? "Passer en mode papier" : "Passer en mode encre"}
      title={dark ? "Mode papier" : "Mode encre"}
    >
      <span className="version-mode__label">v. I</span>
      <span className="version-mode__icon" aria-hidden="true">
        {dark ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default VersionMode;
