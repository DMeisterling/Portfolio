import React from "react";
import { FiCheck, FiExternalLink, FiFileText } from "react-icons/fi";

const ProjectCard = ({ project, reversed }) => {
  const {
    name,
    tagline,
    url,
    screenshot,
    description,
    highlights,
    stack,
    caseStudyUrl,
  } = project;
  const host = new URL(url).host;

  return (
    <article className="card overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} live öffnen`}
          className={`group block bg-slate-300/50 p-4 dark:bg-gray-900/60 sm:p-6 ${
            reversed ? "lg:order-last" : ""
          }`}
        >
          <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-gray-700">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 truncate text-xs text-gray-500 dark:text-gray-400">
                {host}
              </span>
            </div>
            {screenshot ? (
              <img
                src={screenshot}
                alt={`Screenshot von ${name}`}
                width="1440"
                height="900"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top"
              />
            ) : (
              <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-xl font-bold">
                {name}
              </div>
            )}
          </div>
        </a>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="eyebrow">{tagline}</p>
          <h3 className="mt-2 text-2xl font-bold">{name}</h3>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <FiCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologien">
            {stack.map((tech) => (
              <li key={tech} className="tag text-xs">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <a href={url} target="_blank" rel="noreferrer" className="btn-primary">
              Live ansehen
              <FiExternalLink aria-hidden="true" />
            </a>
            {caseStudyUrl ? (
              <a href={caseStudyUrl} className="btn-secondary">
                <FiFileText aria-hidden="true" />
                Technische Case Study
              </a>
            ) : (
              <span className="btn cursor-default border border-dashed border-gray-400 text-gray-500 dark:border-gray-600 dark:text-gray-400">
                <FiFileText aria-hidden="true" />
                Case Study in Vorbereitung
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
