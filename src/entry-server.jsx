import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import de from "./i18n/de";

export const pages = [
  { path: "/", file: "index.html", title: de.meta.title },
  { path: "/Impressum", file: "Impressum.html", title: de.meta.imprintTitle },
  { path: "/Datenschutz", file: "Datenschutz.html", title: de.meta.privacyTitle },
];

export const render = (url) =>
  renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
