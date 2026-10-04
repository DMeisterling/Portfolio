import React from "react";
import { FiCheck } from "react-icons/fi";
import { useLanguage } from "../i18n/LanguageContext";
import Section from "./Section";

const Experience = () => {
  const { t } = useLanguage();
  const { current, previous } = t.experience;

  return (
    <Section
      id="erfahrung"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      className="section-bg"
    >
      <article className="card p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">{current.role}</h3>
            <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-400">
              {current.company}
            </p>
          </div>
          <span className="tag w-fit shrink-0">{current.period}</span>
        </div>
        <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-300">
          {current.summary}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {current.responsibilities.map((item) => (
            <li key={item} className="flex gap-2.5">
              <FiCheck
                aria-hidden="true"
                className="mt-1 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <ol className="mt-8 border-l-2 border-slate-300 dark:border-gray-700">
        {previous.map(({ company, role, period, summary }) => (
          <li key={company} className="relative pb-6 pl-6 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-slate-400 dark:bg-gray-600" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h3 className="font-bold">{role}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {company} · {period}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
