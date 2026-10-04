import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { sectionIds } from "../data/profile";
import { languages, useLanguage } from "../i18n/LanguageContext";
import ScrollLink from "./ScrollLink";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? t.nav.enableLight : t.nav.enableDark}
      className="rounded-md p-2 text-gray-700 transition hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

const LanguageSwitch = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex overflow-hidden rounded-md border border-gray-400 text-xs font-bold dark:border-gray-600"
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-1 uppercase transition ${
            lang === code
              ? "bg-emerald-500 text-white"
              : "text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const NavBar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const onHome = pathname === "/";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = (event) => event.matches && setMenuOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const navIds = sectionIds.filter((id) => id !== "home");

  const renderLink = (id, label, className) =>
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
      <RouterLink to={`/#${id}`} className={className} onClick={() => setMenuOpen(false)}>
        {label}
      </RouterLink>
    );

  const controls = (
    <div className="flex items-center gap-2">
      <LanguageSwitch />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-emerald-500 bg-slate-200/90 backdrop-blur dark:bg-gray-900/90">
      <nav className="mx-auto flex h-16 max-w-screen-lg items-center justify-between px-4">
        {renderLink("home", "Daniel Meisterling", "text-lg font-extrabold tracking-tight")}

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navIds.map((id) => (
              <li key={id}>{renderLink(id, t.nav.sections[id], "nav-link")}</li>
            ))}
          </ul>
          {controls}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          {controls}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
          {navIds.map((id) => (
            <li key={id}>{renderLink(id, t.nav.sections[id], "cursor-pointer")}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
