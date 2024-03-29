import React from "react";
import angular from "../assets/angular.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import linux from "../assets/linux.png";
import mssql from "../assets/mssql.png";
import nextjs from "../assets/nextjs.png";
import php from "../assets/php.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      experience: "bg-80%",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      experience: "bg-80%",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      experience: "bg-80%",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      experience: "bg-40%",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      experience: "bg-40%",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      experience: "bg-40%",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-gray-400",
      experience: "bg-60%",
    },
    {
      id: 8,
      src: php,
      title: "Php",
      style: "shadow-violet-500",
      experience: "bg-20%",
    },
    {
      id: 9,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
      experience: "bg-80%",
    },
    {
      id: 10,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
      experience: "bg-60%",
    },
    {
      id: 11,
      src: mssql,
      title: "MSSQL",
      style: "shadow-gray-500",
      experience: "bg-60%",
    },
    {
      id: 12,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-200",
      experience: "bg-20%",
    },
  ];

  // sort by name
  techs.sort((a, b) => {
    const nameA = a.experience.toUpperCase(); // ignore upper and lowercase
    const nameB = b.experience.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  });

  return (
    <div
      name="erfahrung"
      className="w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900 bg-gradient-to-b  from-slate-200 via-slate-300 to-slate-200"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Erfahrung
          </p>
          <p className="py-6">Meine Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, experience }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} ${experience} bg-bottom bg-gradient-to-t from-slate-500 to-dark-emerald dark:from-transparent dark:to-slate-700 bg-no-repeat`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-slate-800 dark:text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
