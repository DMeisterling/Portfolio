import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import DayNightToggle from 'react-day-and-night-toggle'

const NavBar = ({ darkMode, setDarkMode }) => {

  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

   window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    setNav(false);
   });



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
      link: "projekte",
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
      <ul className="hidden landscape:flex md:flex justify-center items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 cursor-pointer capitalize font-bold dark:text-white hover:scale-105 duration-200 text-xl"
          >
            {window.location.pathname === "/Impressum" ||
            window.location.pathname === "/Datenschutz" ? (
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer capitalize font-bold text-white hover:scale-105 duration-200 text-xl"
              >
                {link}
              </button>
            ) : (
              <Link
                onClick={() => setNav(false)}
                to={link}
                activeClass="active"
                spy={true}
                smooth
                duration={500}
                offset={-100}
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
        className="cursor-pointer z-10 text-gray-500 landscape:hidden md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen min-h-screen vh-100 px-3 cursor-pointer capitalize font-bold dark:text-white text-xl dark:bg-gradient-to-b dark:from-gray-900 dark:to-green-900 bg-gradient-to-b  from-slate-200 via-slate-400 to-slate-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-xl"
            >
              {window.location.pathname === "/Impressum" || window.location.pathname === "/Datenschutz"  ? (
                <button
                  onClick={() => {navigate("/");setNav(!nav);}}
                  className="cursor-pointer capitalize font-bold text-white hover:scale-105 duration-200 text-xl"
                >
                  {link}
                </button>
              ) : (
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-100}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
          <li onClick={() => setDarkMode(!darkMode)} className="pt-10">
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
