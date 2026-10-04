import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { contact } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const socials = [
  { id: "linkedin", href: contact.linkedin, icon: FaLinkedin },
  { id: "github", href: contact.github, icon: FaGithub },
  { id: "email", href: `mailto:${contact.email}`, icon: HiOutlineMail },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-300 px-4 py-10 dark:border-gray-800">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Daniel Meisterling</p>
        <ul className="flex gap-5">
          {socials.map(({ id, href, icon: Icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={t.contact.channels[id]}
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <nav className="flex gap-5" aria-label={t.footer.legal}>
          <Link to="/Impressum" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            {t.footer.imprint}
          </Link>
          <Link to="/Datenschutz" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            {t.footer.privacy}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
