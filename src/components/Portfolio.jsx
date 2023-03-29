import React from "react";
import portfolioProject from "../assets/portfolioProject.png";

const Portfolio = () => {
  const portfolios = [
    {
      name: "Portfolio",
      id: 1,
      src: portfolioProject,
      link: false,
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full md:h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900 bg-gradient-to-b  from-slate-200 via-slate-500 to-slate-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Meine Projekte</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ name, id, src, link, linkSrc }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110"
            >
              <img src={src} alt="" className="rounded-md" />
              <div className="flex items-center justify-center">
                {link ? (
                  <form action={linkSrc} target="_blank">
                    <button className="w-fit px-6 py-3 m-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                      Demo!
                    </button>
                  </form>
                ) : null}
                <form
                  action="https://github.com/DMeisterling/Portfolio"
                  target="_blank"
                >
                  <button className="w-fit px-6 py-3 m-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Code
                  </button>
                </form>
              </div>
              <div className="flex items-center justify-center border-t-2 border-slate-500 pt-1 mb-1">
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
