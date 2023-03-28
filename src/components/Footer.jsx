import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center dark:bg-gradient-to-b dark:from-gray-900 dark:to-dark-emerald">
      <p className="max-w-xl font-light text-gray-500 mb-10">
        © 2023 Daniel Meisterling
      </p>
      <Link to="/Impressum" title="Impressum">
        Impressum
      </Link>
    </section>
  );
};

export default Footer;
