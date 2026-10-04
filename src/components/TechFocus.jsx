import React from "react";
import { techFocus } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import Section from "./Section";

const TechFocus = () => {
  const { t } = useLanguage();

  return (
    <Section id="fokus" eyebrow={t.techFocus.eyebrow} title={t.techFocus.title}>
      <div className="grid gap-6 md:grid-cols-3">
        {techFocus.map(({ id, items }) => (
          <div key={id} className="card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              {t.techFocus.groups[id]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechFocus;
