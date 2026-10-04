import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { sections } from "../data/profile";
import ScrollLink from "./ScrollLink";

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    type="button"
    onClick={() => setDarkMode(!darkMode)}
    aria-label={darkMode ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
    className="rounded-md p-2 text-gray-700 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
  >
    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
  </button>
);

const NavBar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = (event) => event.matches && setMenuOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const navLinks = sections.filter(({ id }) => id !== "home");

  const renderLink = ({ id, label }, className) =>
    onHome ? (
      <ScrollLink
        to={id}
        spy
        activeClass="active"
        className={className}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </ScrollLink>
    ) : (
      <RouterLink to={`/#${id}`} className={className}>
        {label}
      </RouterLink>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-emerald-500 bg-slate-200/90 backdrop-blur dark:bg-gray-900/90">
      <nav className="mx-auto flex h-16 max-w-screen-lg items-center justify-between px-4">
        {renderLink({ id: "home", label: "Daniel Meisterling" }, "text-lg font-extrabold tracking-tight")}

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((section) => (
              <li key={section.id}>{renderLink(section, "nav-link")}</li>
            ))}
          </ul>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="rounded-md p-2 text-gray-700 dark:text-gray-300"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul
          id="mobile-menu"
          className="flex h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-8 border-t border-slate-300 bg-slate-200 text-xl font-semibold dark:border-gray-800 dark:bg-gray-900 md:hidden"
        >
          {navLinks.map((section) => (
            <li key={section.id}>{renderLink(section, "cursor-pointer")}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
