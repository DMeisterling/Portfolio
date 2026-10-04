import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { contact } from "../data/profile";
import Section from "./Section";

const channels = [
  {
    label: "E-Mail",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: HiOutlineMail,
  },
  {
    label: "LinkedIn",
    value: "daniel-meisterling",
    href: contact.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "DMeisterling",
    href: contact.github,
    icon: FaGithub,
    external: true,
  },
];

const inputClass =
  "w-full rounded-md border border-gray-400 bg-white/70 px-3 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-100 dark:placeholder-gray-400";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const values = ["name", "email", "message"].map((field) =>
      form.elements[field].value.trim()
    );
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (values.some((value) => value === "")) {
      alert("Bitte alle Felder ausfüllen.");
    } else if (!emailPattern.test(values[1])) {
      alert("Bitte eine gültige E-Mail-Adresse eingeben.");
    } else {
      form.submit();
    }
  };

  return (
    <Section
      id="kontakt"
      eyebrow="Kontakt"
      title="Lassen Sie uns sprechen"
      intro="Ob Projektanfrage, Austausch oder Feedback zu einem meiner Produkte – ich freue mich über Ihre Nachricht."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <ul className="flex flex-col gap-3 md:col-span-2">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noreferrer" })}
                className="card flex items-center gap-4 p-4 transition hover:border-emerald-500 dark:hover:border-emerald-400"
              >
                <Icon size={22} aria-hidden="true" className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="min-w-0">
                  <span className="block text-sm text-gray-600 dark:text-gray-400">{label}</span>
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
              Name
              <input type="text" name="name" autoComplete="name" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              E-Mail
              <input type="email" name="email" autoComplete="email" required className={inputClass} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            Nachricht
            <textarea name="message" rows="6" required className={inputClass} />
          </label>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
            verwendet. Details finden Sie in der{" "}
            <Link to="/Datenschutz" className="underline hover:text-emerald-600">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button type="submit" className="btn-primary self-start">
            Nachricht senden
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
