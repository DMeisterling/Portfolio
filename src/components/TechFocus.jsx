import React from "react";
import { techFocus } from "../data/profile";
import Section from "./Section";

const TechFocus = () => {
  return (
    <Section
      id="fokus"
      eyebrow="Technischer Fokus"
      title="Werkzeuge, mit denen ich täglich arbeite"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {techFocus.map(({ title, items }) => (
          <div key={title} className="card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              {title}
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
