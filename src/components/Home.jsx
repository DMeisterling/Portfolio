import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white px-4">
            Ich bin ein Software Developer
          </h2>
          <ul className="text-gray-500 p-4 padding max-w-md list-disc">
            <li>
              Full-Stack Software-Developement mit JavaScript, Angular und
              TypeScript
            </li>
            <li>API-Aufrufe für REST-APIs via Postman</li>
            <li>Datenbank-Queries für u.A. MSSQL und PostgreSQL</li>
            <li>Testing und Dokumentation von neuen Funktionen via PHPUnit</li>
            <li>Versionierungskontrolle mit zyklischen Releases</li>
            <li>Pluginaktualisierung für eine Authentifizierung mit LDAP</li>
            <li>Agile Coding mit Scrum-Methoden und Sprints</li>
            <li>
              Code- und Designanpassungen in kundenorientierten Lösungsansätzen
            </li>
          </ul>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
