import React from "react";
import Section from "./Section";

const strengths = [
  {
    title: "Frontend-Kompetenz",
    text: "Angular, TypeScript und eine UI-Architektur, die auch bei komplexen Anwendungen wartbar bleibt.",
  },
  {
    title: "Full-Stack-Erfahrung",
    text: ".NET-APIs, SQL-Datenbanken und Integrationen – Features entstehen bei mir durchgängig.",
  },
  {
    title: "Product Ownership",
    text: "Anforderungen verstehen, Prioritäten setzen und eine Roadmap pragmatisch umsetzen.",
  },
  {
    title: "Technische Verantwortung",
    text: "Architektur, Security und Entwicklungsprozesse, die ein Produkt langfristig tragen.",
  },
];

const About = () => {
  return (
    <Section
      id="ueber-mich"
      eyebrow="Über mich"
      title="Vollständige Anwendungen statt einzelner Tickets"
      className="section-bg"
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 md:col-span-3 sm:text-lg">
          <p>
            Ich bin Software Engineer mit klarem Schwerpunkt im Frontend und
            fundierter Full-Stack-Erfahrung. Als Lead of Development bei der
            Simmeth System GmbH verantworte ich die technische Weiterentwicklung
            einer B2B-SaaS-Plattform – von Planung und Architektur bis zur
            Umsetzung.
          </p>
          <p>
            Mich interessieren vor allem vollständige, nutzbare Produkte. Ich
            denke Anforderungen aus Produktsicht mit, treffe pragmatische
            technische Entscheidungen und sorge dafür, dass Software zuverlässig
            in Produktion läuft.
          </p>
          <p>
            Neben dem Beruf entwickle und betreibe ich eigene Anwendungen wie
            PoE Analyze und Fleissaufgabe – eigenständig von der Idee über
            Design und Implementierung bis zu Deployment und Betrieb.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-2 md:grid-cols-1">
          {strengths.map(({ title, text }) => (
            <li key={title} className="card p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
