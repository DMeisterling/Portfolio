import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { pages, render as renderPage } from "./entry-server";
import { dictionaries } from "./i18n/LanguageContext";

const renderApp = (path = "/") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

beforeAll(() => {
  window.matchMedia = () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  window.scrollTo = () => {};
});

beforeEach(() => localStorage.clear());

test("renders hero and all main sections", () => {
  renderApp();

  expect(
    screen.getByRole("heading", { level: 1, name: "Daniel Meisterling" })
  ).toBeInTheDocument();
  ["Ausgewählte Projekte", "Berufserfahrung", "Technischer Fokus", "Über mich", "Kontakt"].forEach(
    (eyebrow) => expect(screen.getByText(eyebrow, { selector: ".eyebrow" })).toBeInTheDocument()
  );
  expect(screen.getAllByRole("link", { name: /Live ansehen/ })).toHaveLength(2);
});

test("footer shows the current year and legal links", () => {
  renderApp();

  expect(
    screen.getByText(`© ${new Date().getFullYear()} Daniel Meisterling`)
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Impressum" })).toHaveAttribute("href", "/Impressum");
  expect(screen.getByRole("link", { name: "Datenschutz" })).toHaveAttribute("href", "/Datenschutz");
});

test("switches the language to English and back", () => {
  renderApp();

  fireEvent.click(screen.getAllByRole("button", { name: "en" })[0]);
  expect(screen.getByText("Selected projects", { selector: ".eyebrow" })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("en");
  expect(localStorage.getItem("language")).toBe("en");

  fireEvent.click(screen.getAllByRole("button", { name: "de" })[0]);
  expect(screen.getByText("Ausgewählte Projekte", { selector: ".eyebrow" })).toBeInTheDocument();
});

test("restores the stored language after the first render", async () => {
  localStorage.setItem("language", "en");
  renderApp();

  expect(await screen.findByText("Selected projects", { selector: ".eyebrow" })).toBeInTheDocument();
});

const shape = (value) => {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]));
  }
  return value === null ? "string" : typeof value;
};

test("all locales provide the same translation keys", () => {
  const [reference, ...others] = Object.values(dictionaries);
  others.forEach((dictionary) => expect(shape(dictionary)).toEqual(shape(reference)));
});

test("prerendered pages contain their content without JavaScript", () => {
  const html = Object.fromEntries(pages.map(({ path }) => [path, renderPage(path)]));

  expect(html["/"]).toContain("Ausgewählte Projekte");
  expect(html["/"]).toContain('href="https://poeanalyze.com"');
  expect(html["/"]).toContain('href="https://fleissaufgabe.com"');
  expect(html["/Impressum"]).toContain("Angaben gemäß § 5 TMG");
  expect(html["/Datenschutz"]).toContain("Datenschutz");
});
