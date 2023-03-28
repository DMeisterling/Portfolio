import React from "react";

const About = () => {
  return (
    <div name="über mich" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-dark-emerald dark:to-gray-900">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Über mich
          </p>
        </div>
        <p className="text-xl mt-20">
          Hallo! Ich bin Daniel Meisterling, ein 25 Jahre junger Software
          Developer.
        </p>
        <br />
        <p className="text-xl">
          Ich habe zuletzt als Anwendungsentwickler gearbeitet. Zu meinem
          Arbeitsalltag gehörten außer dem Programmieren im Frontend als auch im
          Backend auch noch die Verwaltung von Servern und Datenbanken, der
          Support von Kunden per Anfragen und Dokumentation von Änderungen und
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
