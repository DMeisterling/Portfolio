import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import heroImage from "../assets/hero.jpg";
import { contact } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import ScrollLink from "./ScrollLink";

const Home = () => {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section id="home" className="section-bg w-full px-4 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
          <div className="flex-1 text-center md:text-left">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Daniel Meisterling
            </h1>
            <p className="mt-3 text-xl font-semibold text-gray-700 dark:text-gray-200 sm:text-2xl">
              {hero.subtitle}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:mx-0">
              {hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <ScrollLink to="projekte" className="btn-primary">
                {hero.ctaProjects}
                <FiArrowDown aria-hidden="true" />
              </ScrollLink>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <ScrollLink to="kontakt" className="btn-secondary">
                {hero.ctaContact}
              </ScrollLink>
            </div>
          </div>
          <img
            src={heroImage}
            alt={hero.portraitAlt}
            width="800"
            height="800"
            className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-emerald-500/40 sm:h-56 sm:w-56 md:h-72 md:w-72"
          />
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-3">
          {hero.facts.map(({ value, label }) => (
            <div key={value} className="card flex flex-col px-5 py-4 text-center md:text-left">
              <dt className="text-sm text-gray-600 dark:text-gray-400">{label}</dt>
              <dd className="order-first text-lg font-bold">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Home;
