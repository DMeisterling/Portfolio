import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center dark:bg-gradient-to-b dark:from-gray-900 dark:to-dark-emerald bg-gradient-to-b  from-slate-200 via-slate-400 to-slate-500">
      <p className="max-w-xl font-bold text-gray-900 dark:text-gray-500 mb-10">
        © 2023 Daniel Meisterling
      </p>
      <Link to="/Impressum" title="Impressum">
        Impressum
      </Link>
      <Link to="/Datenschutz" title="Datenschutz">
        Datenschutz
      </Link>
    </section>
  );
};

export default Footer;
