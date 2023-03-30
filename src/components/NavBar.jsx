import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import DayNightToggle from 'react-day-and-night-toggle'

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

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
    <div className="flex flex-col ontop justify-between items-center w-full h-12 px-3 pt-2 text-gray-900 bg-slate-200 dark:text-white dark:bg-gray-900 fixed border-b-4 border-emerald-500">
      <ul className="hidden md:flex justify-center items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200 text-xl"
          >
            {window.location.pathname === "/Impressum" ||
            window.location.pathname === "/Datenschutz" ? (
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200 text-xl"
              >
                {link}
              </button>
            ) : (
              <Link
                to={link}
                activeClass="active"
                spy={true}
                smooth
                duration={500}
              >
                {link}
              </Link>
            )}
          </li>
        ))}
        <li onClick={() => setDarkMode(!darkMode)} className="ml-8 w-fit cursor-pointer">
          {darkMode ? (
            <DayNightToggle
            checked={darkMode}
            size={24}
          />
          ) : (
            <DayNightToggle
              checked={darkMode}
              size={24}
            />
          )}
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-gray-900 to-gray-800 text-black bold">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {window.location.pathname === "/Impressum" ? (
                <button
                  onClick={() => navigate("/")}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  {link}
                </button>
              ) : (
                <Link
                  onclick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
          <li onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <DayNightToggle
              checked={darkMode}
              size={24}
            />
            ) : (
              <DayNightToggle
              checked={darkMode}
              size={24}
            />
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
