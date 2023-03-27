import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "über mich",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "erfahrung",
    },
    {
      id: 5,
      link: "kontakt",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center w-full h-12 px-4 text-gray-900 bg-slate-200 dark:text-emerald-500 dark:bg-gray-900 fixed border-b-2">
      {/* <div>
        <h1 className="text-3xl sig ml-2">Daniel Meisterling</h1>
      </div> */}

      <ul className="hidden md:flex pt-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 pt-2 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-black bold">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onclick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer" />
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
