import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { contact } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import Section from "./Section";

const channels = [
  {
    id: "email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: HiOutlineMail,
  },
  {
    id: "linkedin",
    value: "daniel-meisterling",
    href: contact.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "github",
    value: "DMeisterling",
    href: contact.github,
    icon: FaGithub,
    external: true,
  },
];

const inputClass =
  "w-full rounded-md border border-gray-400 bg-white/70 px-3 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder-gray-400";

const Contact = () => {
  const { t } = useLanguage();
  const { form } = t.contact;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const values = ["name", "email", "message"].map((field) =>
      formElement.elements[field].value.trim()
    );
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (values.some((value) => value === "")) {
      alert(form.errorRequired);
    } else if (!emailPattern.test(values[1])) {
      alert(form.errorEmail);
    } else {
      formElement.submit();
    }
  };

  return (
    <Section
      id="kontakt"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      intro={t.contact.intro}
    >
      <div className="grid gap-10 md:grid-cols-5">
        <ul className="flex flex-col gap-3 md:col-span-2">
          {channels.map(({ id, value, href, icon: Icon, external }) => (
            <li key={id}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noreferrer" })}
                className="card flex items-center gap-4 p-4 transition hover:border-emerald-500 dark:hover:border-emerald-400"
              >
                <Icon size={22} aria-hidden="true" className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="min-w-0">
                  <span className="block text-sm text-gray-600 dark:text-gray-400">
                    {t.contact.channels[id]}
                  </span>
                  <span className="block truncate font-semibold">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <form
          action="https://getform.io/f/ee69fc10-2066-4b66-857d-707c186d2845"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
          className="card flex flex-col gap-4 p-6 md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              {form.name}
              <input type="text" name="name" autoComplete="name" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              {form.email}
              <input type="email" name="email" autoComplete="email" required className={inputClass} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            {form.message}
            <textarea name="message" rows="6" required className={inputClass} />
          </label>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {form.privacyBefore}
            <Link to="/Datenschutz" className="underline hover:text-emerald-600">
              {form.privacyLink}
            </Link>
            {form.privacyAfter}
          </p>
          <button type="submit" className="btn-primary self-start">
            {form.submit}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
