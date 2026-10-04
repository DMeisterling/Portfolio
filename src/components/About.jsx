import { useLanguage } from "../i18n/LanguageContext";
import Section from "./Section";

const About = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <Section
      id="ueber-mich"
      eyebrow={about.eyebrow}
      title={about.title}
      className="section-bg"
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 md:col-span-3 sm:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-1">
          {about.strengths.map(({ title, text }) => (
            <li key={title} className="card p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
