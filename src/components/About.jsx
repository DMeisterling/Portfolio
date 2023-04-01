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
          Hallo! Ich bin Daniel Meisterling, 25 Jahre jung und Software
          Developer.
        </p>
        <br />
        <p className="text-xl">
          Ich habe zuletzt als Anwendungsentwickler gearbeitet. Zu meinem
          Arbeitsalltag gehörten neben dem Programmieren im Frontend als auch im
          Backend auch die Verwaltung von Servern und Datenbanken, der Support
          von Kunden per Anfragen und Dokumentation von Änderungen und
          Anleitungen. Die Erfassung von Anforderungen von Kunden und
          Abteilungen sowie die Fehleranalyse und Behebung von Fehlern waren
          auch Teil meiner Tätigkeit.
        </p>
        <br />
        <p className="text-xl">
          Nach nun über &nbsp;
          <span className="font-extrabold underline">
            3 Jahren Berufserfahrung als Anwendungsentwickler{" "}
          </span>
          möchte ich meine neuen Kenntnisse und Fähigkeiten nutzen und mich
          weiterentwickeln. Schreiben Sie mir gerne eine Email oder nutzen Sie
          das Kontaktformular weiter unten!
        </p>
      </div>
    </div>
  );
};

export default About;
