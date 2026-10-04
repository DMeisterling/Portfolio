import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.matchMedia = () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  });
  window.scrollTo = () => {};
});

test("renders hero and all main sections", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Daniel Meisterling" })
  ).toBeInTheDocument();
  ["Ausgewählte Projekte", "Berufserfahrung", "Technischer Fokus", "Über mich", "Kontakt"].forEach(
    (eyebrow) => expect(screen.getByText(eyebrow, { selector: ".eyebrow" })).toBeInTheDocument()
  );
  expect(screen.getAllByRole("link", { name: /Live ansehen/ })).toHaveLength(2);
});

test("footer shows the current year and legal links", () => {
  render(<App />);

  expect(
    screen.getByText(`© ${new Date().getFullYear()} Daniel Meisterling`)
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Impressum" })).toHaveAttribute("href", "/Impressum");
  expect(screen.getByRole("link", { name: "Datenschutz" })).toHaveAttribute("href", "/Datenschutz");
});
