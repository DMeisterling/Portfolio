import React from "react";
import portfolioProject from "../assets/portfolioProject.png";

const Portfolio = () => {
  const portfolios = [
    {
      name: "Portfolio",
      id: 1,
      src: portfolioProject,
      demo: false,
      linkSrc: "https://github.com/DMeisterling/Portfolio"
    },
  ];

  return (
    <div
      name="projekte"
      className="w-full md:h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900 bg-gradient-to-b  from-slate-200 via-slate-300 to-slate-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projekte
          </p>
          <p className="py-6">Meine Projekte</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
  {portfolios.map(({ name, id, src, demo, demoSrc, linkSrc }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110">
      <img src={src} alt="" className="rounded-t aspect-video" />

      <div className="flex items-center justify-center">
        {demo ? (
          <form action={demoSrc} target="_blank" className="w-1/2 rounded-l">
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 cursor-pointer">
              Demo
            </button>
          </form>
        ) : null}

        <form action={linkSrc} target="_blank" className={`${demo ? 'w-1/2 border-l border-gray-400' : 'w-full rounded-md'}`}>
          <button className="w-full py-3 bg-gradient-to-r  from-cyan-500 via-blue-500 to-cyan-500 cursor-pointer">
            Github
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center border-t-2 border-slate-500 pt-1 mb-1 ">
        {name}
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Portfolio;
