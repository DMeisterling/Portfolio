import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <div class="fit mx-auto flex flex-col items-center justify-center h-80 px-4 text-center">
        <h2 class="text-3xl sm:text-7xl md:text-7xl font-bold border-b-4 border-l-4 border-gray-500 pb-4 px-2">
          Daniel Meisterling
        </h2>
        <h3 class="text-2xl sm:text-4xl md:text-6xl font-bold border-b-4 border-r-4 border-emerald-500 pb-4 px-2">
          Software Developer
        </h3>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center max-w-lg w-full">
          <ul className="dark:text-gray-200 text-black p-4 list-disc">
            <li className="pt-4">
              Full-Stack Software-Developement mit JavaScript, Angular und
              TypeScript
            </li>
            <li className="pt-3">API-Aufrufe für REST-APIs via Postman</li>
            <li className="pt-3">
              Datenbank-Queries für u.A. MSSQL und PostgreSQL
            </li>
            <li className="pt-3">
              Testing und Dokumentation von neuen Funktionen via PHPUnit
            </li>
            <li className="pt-3">
              Versionierungskontrolle mit zyklischen Releases
            </li>
            <li className="pt-3">
              Pluginaktualisierung für eine Authentifizierung mit LDAP
            </li>
            <li className="pt-3">
              Agile Coding mit Scrum-Methoden und Sprints
            </li>
            <li className="pt-3">
              Code- und Designanpassungen in kundenorientierten Lösungsansätzen
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
