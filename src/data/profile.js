import fleissaufgabeScreenshot from "../assets/projects/fleissaufgabe.webp";
import poeAnalyzeScreenshot from "../assets/projects/poeanalyze.webp";

export const contact = {
  email: "danielmeisterling@googlemail.com",
  linkedin: "https://linkedin.com/in/daniel-meisterling",
  github: "https://github.com/DMeisterling",
};

export const sectionIds = [
  "home",
  "projekte",
  "erfahrung",
  "fokus",
  "ueber-mich",
  "kontakt",
];

export const projects = [
  {
    id: "poeanalyze",
    name: "PoE Analyze",
    url: "https://poeanalyze.com",
    screenshot: poeAnalyzeScreenshot,
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
    url: "https://fleissaufgabe.com",
    screenshot: fleissaufgabeScreenshot,
    stack: ["Angular", "TypeScript", "Supabase", "PostgreSQL", "Vitest"],
    caseStudyUrl: null,
  },
];

export const techFocus = [
  { id: "frontend", items: ["Angular", "TypeScript", "JavaScript", "HTML & CSS"] },
  { id: "backend", items: [".NET / C#", "REST APIs", "SQL"] },
  { id: "engineering", items: ["Testing", "Git", "CI/CD", "Linux"] },
];
