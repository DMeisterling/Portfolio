import React from "react";
import { projects } from "../data/profile";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

const Portfolio = () => {
  return (
    <Section
      id="projekte"
      eyebrow="Ausgewählte Projekte"
      title="Eigene Produkte, live im Betrieb"
      intro="Zwei Anwendungen, die ich eigenständig konzipiert, entwickelt und betreibe – von der Domänenmodellierung über UI und API bis zu Deployment und laufendem Betrieb."
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
