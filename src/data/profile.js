import fleissaufgabeScreenshot from "../assets/projects/fleissaufgabe.webp";
import poeAnalyzeScreenshot from "../assets/projects/poeanalyze.webp";

export const contact = {
  email: "dan-meisterling@t-online.de",
  linkedin: "https://linkedin.com/in/daniel-meisterling",
  github: "https://github.com/DMeisterling",
};

export const sections = [
  { id: "home", label: "Start" },
  { id: "projekte", label: "Projekte" },
  { id: "erfahrung", label: "Erfahrung" },
  { id: "fokus", label: "Tech-Fokus" },
  { id: "ueber-mich", label: "Über mich" },
  { id: "kontakt", label: "Kontakt" },
];

export const projects = [
  {
    id: "poeanalyze",
    name: "PoE Analyze",
    tagline: "Marktanalyse-Plattform für Path of Exile",
    url: "https://poeanalyze.com",
    screenshot: poeAnalyzeScreenshot,
    description:
      "Analysiert Itempreise, Liquidität, historische Abweichungen und Marktsignale über verschiedene Ligen hinweg und macht einen volatilen Markt mit tausenden Items lesbar.",
    highlights: [
      "Dashboards mit Markt-KPIs und Liga-Zustand",
      "Historische Vergleiche über Ligen hinweg",
      "Signalerkennung für Über- und Unterbewertungen",
      "Filterung und Suche über große Datenmengen",
      "Datenvisualisierung mit interaktiven Charts",
      "Komplexe Domänenlogik in Frontend und API",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Chart.js",
      "ASP.NET Core",
      "PostgreSQL",
      "Docker",
    ],
    caseStudyUrl: null,
  },
  {
    id: "fleissaufgabe",
    name: "Fleissaufgabe",
    tagline: "Full-Stack-Lernplattform für Japanisch",
    url: "https://fleissaufgabe.com",
    screenshot: fleissaufgabeScreenshot,
    description:
      "Lernplattform mit Spaced-Repetition-System, die von echten Nutzern zum Japanischlernen verwendet wird, mit Cloud-Sync, eigener Deck-Verwaltung und durchdachter Lernlogik.",
    highlights: [
      "Google-Authentifizierung und persistente Nutzerdaten",
      "Deck- und Kartenverwaltung mit Import/Export",
      "Lernen in beide Richtungen JP ↔ DE",
      "SRS-Lernlogik für nachhaltiges Wiederholen",
      "Übersetzungs- und Lesungs-Nachschlagefunktion",
      "Responsive UI mit Light- und Dark-Mode",
    ],
    stack: ["Angular", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    caseStudyUrl: null,
  },
];

export const experience = [
  {
    company: "Simmeth System GmbH",
    role: "Lead of Development / Software Engineer",
    period: "Seit Mai 2023",
    current: true,
    summary:
      "Technische Verantwortung für die Weiterentwicklung einer B2B-SaaS-Plattform für Supplier Relationship Management.",
    responsibilities: [
      "Entwicklungsplanung, Roadmap und Priorisierung",
      "Architekturentscheidungen für Frontend und Backend der SRM-Plattform",
      "Frontend-Entwicklung mit Angular und TypeScript sowie Full-Stack-Feature-Entwicklung",
      "Koordination von Security-Themen und Penetrationstests",
      "Engineering-KPIs und kontinuierliche Weiterentwicklung der Entwicklungsprozesse",
      "Verbesserung der Support- und Ticketing-Prozesse zwischen Entwicklung und Kunden",
    ],
  },
  {
    company: "INES IT",
    role: "Anwendungsentwickler",
    period: "2020 – 2022",
    summary:
      "Entwicklung und Betrieb kundenspezifischer Webanwendungen, inklusive Datenbanken und Kundenservern.",
  },
  {
    company: "Raiffeisen-Tours RT-Reisen GmbH",
    role: "Anwendungsentwickler",
    period: "2019",
    summary: "Einstieg in die professionelle Softwareentwicklung.",
  },
];

export const techFocus = [
  {
    title: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML & CSS"],
  },
  {
    title: "Backend & Daten",
    items: [".NET / C#", "REST APIs", "SQL"],
  },
  {
    title: "Engineering & Betrieb",
    items: ["Testing", "Git", "CI/CD", "Linux"],
  },
];
