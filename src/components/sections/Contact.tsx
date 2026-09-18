import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../i18n";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert(t.contact.success);
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(t.contact.error);
        }
      );
  };

  const fields = [
    { key: "name" as const, ...t.contact.form.name },
    { key: "email" as const, ...t.contact.form.email },
    { key: "message" as const, ...t.contact.form.message },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <Header useMotion={false} index={6} p={t.contact.p} h2={t.contact.h2} />

      <p className="mt-6 text-[1.125rem] leading-[1.8] text-ink">
        {t.contact.intro}
      </p>

      <p className="mt-4 text-[1.05rem]">
        {t.contact.orEmail}{" "}
        <a href={`mailto:${config.html.email}`}>{config.html.email}</a>
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 flex max-w-xl flex-col gap-6"
      >
        {fields.map((field) => {
          const Component = field.key === "message" ? "textarea" : "input";

          return (
            <label key={field.key} className="flex flex-col gap-2">
              <span className="font-subtitle text-[1rem] font-medium text-ink">
                {field.span}
              </span>
              <Component
                type={field.key === "email" ? "email" : "text"}
                name={field.key}
                value={form[field.key]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="lynn-input"
                {...(field.key === "message" ? { rows: 6 } : {})}
              />
            </label>
          );
        })}

        <button type="submit" className="lynn-link-btn self-start">
          {loading ? t.contact.sending : t.contact.send}
        </button>
      </form>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
