import React from "react";

const About = () => {
  return (
    <div
      name="über mich"
      className="w-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900 bg-gradient-to-b  from-slate-200 via-slate-300 to-slate-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Über mich
          </p>
        </div>
        <p className="text-xl mt-20">
          Hallo! Ich bin Daniel Meisterling, 26 Jahre jung und Software
          Developer.
        </p>
        <br />
        <p className="text-xl">
          Mein Tätigkeitsbereich erstreckt sich über die Entwicklung von
          Frontend- und Backend-Lösungen sowie die Administration und
          Konfiguration von Applikationen auf Kundenservern und den zugehörigen
          Datenbanken. Zusätzlich dazu kümmere ich mich um die Betreuung von
          Kundenanfragen und verfasse präzise Dokumentationen. Die Erfassung,
          Analyse und Behebung von Kundenanforderungen und Fehlern gehören
          ebenfalls zu meinen zentralen Aufgaben.
        </p>
        <br />
        <p className="text-xl">
          Ich habe nun bereits über 4&nbsp;
          <span className="font-extrabold underline">
            Jahre Berufserfahrung als Anwendungsentwickler
          </span>
          .
          <br />
          <span>
            Schreiben Sie mir gerne eine Email oder nutzen Sie das
            Kontaktformular weiter unten!
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
