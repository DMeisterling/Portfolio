import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="pb-8 pt-10 sm:pt-20 w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900 bg-gradient-to-b  from-slate-200 via-slate-300 to-slate-200"
    >
      <div className="mx-auto mb-auto flex flex-col items-center justify-center h-40 px-4 text-center pb-4">
        <h2 className="text-3xl sm:text-7xl md:text-7xl font-bold pb-2 px-2">
          Daniel Meisterling
        </h2>
        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold border-b-4 border-gray-500 pb-2 px-2">
          Software Developer
        </h3>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col justify-center max-w-lg w-full">
          <ul className="dark:text-gray-200 text-black p-4 list-disc">
            <li className="pt-4">
              <strong>Full-Stack Software-Developement</strong> mit{" "}
              <strong className="underline">Angular</strong>,{" "}
              <strong className="underline">TypeScript </strong>und
              <strong className="underline"> JavaScript </strong>
            </li>
            <li className="pt-3">
              Testing von API-Aufrufen für REST-APIs via{" "}
              <strong className="underline">Postman </strong>
            </li>
            <li className="pt-3">
              Datenbank-Queries für u.A.{" "}
              <strong className="underline">MSSQL </strong>und{" "}
              <strong className="underline">PostgreSQL </strong>
            </li>
            <li className="pt-3">
              Versionierungskontrolle mit zyklischen Releases
            </li>
            <li className="pt-3">
              Code- und Designanpassungen in{" "}
              <strong className="underline">kundenorientierten </strong>
              Lösungsansätzen
            </li>
            <li className="pt-3">
              Agile Coding mit <strong className="underline">Scrum-</strong>
              Methoden und Sprints
            </li>
            <li className="pt-3">
              Pluginaktualisierung für eine Authentifizierung mit LDAP
            </li>
            <li className="pt-3">
              Testing und Dokumentation von neuen Funktionen via{" "}
              <strong className="underline">PHPUnit </strong>
            </li>
          </ul>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold border-gray-500 pt-2 px-2">
            Aktuelle Tasks und Milestones:
          </h1>
          <ul className="dark:text-gray-200 text-black p-4 list-disc">
            <li className="pt-3">
              Pflege von alten und Entwicklung von neuen Features für ein
              umfangreiches <strong className="underline">SRM-System </strong>
              <li className="pt-3">
                Entwicklung eines{" "}
                <strong className="underline">Wizards </strong>
                für nutzerfreundliches Leiten durch Tasks
              </li>
              <li className="pt-3">
                Erweiterung des Loginverfahrens um eine{" "}
                <strong className="underline">
                  SingleSignOn-Funktionalität{" "}
                </strong>
                für einen persistenten Login über alle Anwendungen des Systems
              </li>
              <li className="pt-3">
                Aktualisierung von{" "}
                <strong className="underline">Bootstrap </strong>
                für alle Anwendungen von 3.x auf 5.x
              </li>
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              to="projekte"
              smooth
              duration={500}
              offset={-100}
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
