import {
  type FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { answerFromChunks } from "../../chat/answer";
import { buildKnowledge } from "../../chat/buildKnowledge";
import { retrieveChunks } from "../../chat/retrieve";
import type { ChatMessage } from "../../chat/types";
import { useLanguage } from "../../i18n";

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `m-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const PortfolioChat = () => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const knowledge = useMemo(() => buildKnowledge(t), [t]);

  useEffect(() => {
    setMessages([
      {
        id: uid(),
        role: "assistant",
        content: t.chat.welcome,
      },
    ]);
  }, [t.chat.welcome]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, busy]);

  const ask = async (raw: string) => {
    const question = raw.trim();
    if (!question || busy) return;

    const userMsg: ChatMessage = { id: uid(), role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setBusy(true);

    const retrieved = retrieveChunks(question, knowledge, 5);
    let reply = answerFromChunks({
      query: question,
      chunks: retrieved,
      lang,
    });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          lang,
          chunks: retrieved,
        }),
      });
      if (response.ok) {
        const data = (await response.json()) as {
          answer?: string | null;
        };
        if (data.answer?.trim()) reply = data.answer.trim();
      }
    } catch {
      // Local grounded answer when API / Ollama is offline.
    }

    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "assistant", content: reply },
    ]);
    setBusy(false);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    void ask(input);
  };

  return (
    <div className={`portfolio-chat ${open ? "is-open" : ""}`}>
      {open && (
        <section
          id="portfolio-chat"
          className="portfolio-chat__panel"
          aria-label={t.chat.title}
          role="dialog"
          aria-modal="false"
        >
          <header className="portfolio-chat__header">
            <div>
              <p className="portfolio-chat__eyebrow">{t.chat.eyebrow}</p>
              <h2 className="portfolio-chat__title">{t.chat.title}</h2>
            </div>
            <button
              type="button"
              className="portfolio-chat__close"
              onClick={() => setOpen(false)}
              aria-label={t.chat.close}
            >
              ×
            </button>
          </header>

          <p className="portfolio-chat__hint">{t.chat.hint}</p>

          <div
            className="portfolio-chat__suggestions"
            aria-label={t.chat.suggestionsLabel}
          >
            {t.chat.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className="portfolio-chat__chip"
                onClick={() => void ask(suggestion)}
                disabled={busy}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <div className="portfolio-chat__messages" ref={listRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`portfolio-chat__bubble portfolio-chat__bubble--${message.role}`}
              >
                {message.content.split("\n").map((line, index) => (
                  <p key={`${message.id}-${index}`}>{line || "\u00a0"}</p>
                ))}
              </div>
            ))}
            {busy && (
              <div className="portfolio-chat__bubble portfolio-chat__bubble--assistant is-typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <form className="portfolio-chat__form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="portfolio-chat-input">
              {t.chat.placeholder}
            </label>
            <input
              id="portfolio-chat-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.chat.placeholder}
              autoComplete="off"
              disabled={busy}
            />
            <button
              type="submit"
              className="jc-btn-primary"
              disabled={busy || !input.trim()}
            >
              {busy ? t.chat.thinking : t.chat.send}
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`portfolio-chat__toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="portfolio-chat"
        aria-label={open ? t.chat.close : t.chat.open}
        title={open ? t.chat.close : t.chat.open}
      >
        <span className="portfolio-chat__toggle-ring" aria-hidden="true" />
        {open ? (
          <svg
            className="portfolio-chat__toggle-icon"
            viewBox="0 0 40 40"
            width="18"
            height="18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 13l14 14M27 13L13 27"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className="portfolio-chat__toggle-icon"
            viewBox="0 0 40 40"
            width="28"
            height="28"
            fill="none"
            aria-hidden="true"
          >
            {/* Postmark / wax-seal chat */}
            <circle
              cx="20"
              cy="20"
              r="15.2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="1.6 2.2"
              opacity="0.55"
            />
            <path
              d="M11 14.2c0-1.2.9-2.2 2.1-2.2h13.8c1.2 0 2.1 1 2.1 2.2v9.2c0 1.2-.9 2.2-2.1 2.2H18.4L14 28.8v-3.2h-.9c-1.2 0-2.1-1-2.1-2.2v-9.2z"
              stroke="currentColor"
              strokeWidth="1.45"
              strokeLinejoin="round"
            />
            <circle cx="16.2" cy="18.8" r="1.15" fill="currentColor" />
            <circle cx="20" cy="18.8" r="1.15" fill="currentColor" />
            <circle cx="23.8" cy="18.8" r="1.15" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PortfolioChat;
