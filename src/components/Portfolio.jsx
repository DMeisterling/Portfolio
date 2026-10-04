import React from "react";
import { projects } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="projekte"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      intro={t.projects.intro}
    >
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
