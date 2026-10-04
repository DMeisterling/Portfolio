# Portfolio – Daniel Meisterling

Persönliche Portfolio-Website (deutschsprachig), live unter [danielmeisterling.de](https://danielmeisterling.de).

## Stack

React 18, Vite, Tailwind CSS 3, React Router, react-scroll. Deployment über Netlify (Build-Befehl `npm run build`, Publish-Verzeichnis `build`, Node-Version aus `.nvmrc`).

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build inkl. Prerendering nach build/
npm run preview  # Build lokal ansehen
npm test         # Vitest
npm run lint     # ESLint
```

## Prerendering

`npm run build` erzeugt zuerst das Client-Bundle und rendert danach `/`, `/Impressum` und `/Datenschutz`
mit `src/entry-server.jsx` und `scripts/prerender.js` zu fertigem HTML (`index.html`, `Impressum.html`,
`Datenschutz.html`). Titel, Canonical-URL und `og:url` werden pro Seite gesetzt. Im Browser hydriert React
das HTML (`src/main.jsx`). Prerendert wird die deutsche Fassung; eine gespeicherte Sprachwahl wird nach der
Hydration angewendet. `app-shell.html` ist das leere Fallback für alle übrigen Pfade (siehe `public/_redirects`).

Neue Seiten müssen in `pages` in `src/entry-server.jsx`, in `public/_redirects` und in `public/sitemap.xml`
ergänzt werden.

## Inhalte pflegen

Die Seite ist zweisprachig (Deutsch/Englisch, Umschalter in der Navigation, Auswahl wird im `localStorage` gespeichert; Standard ist Deutsch).

- **Texte:** `src/i18n/de.js` und `src/i18n/en.js` – beide Dateien müssen dieselbe Struktur haben (wird per Test geprüft).
- **Sprachneutrale Daten** (Links, Screenshots, Tech-Stacks, Kontaktdaten): `src/data/profile.js`.
- **Projekt-Screenshots:** `src/assets/projects/` (WebP, 1440×900). Fehlt ein Screenshot, zeigt die Karte einen Platzhalter.
- **Technische Case Study:** `caseStudyUrl` am Projekt setzen – solange `null`, erscheint „Case Study in Vorbereitung“.
- **SEO / Social Sharing:** Meta-Tags und JSON-LD in `public/index.html`, Vorschaubild `public/og-image.jpg` (1200×630).
- **Datenschutzerklärung:** nur auf Deutsch; in der englischen Ansicht erscheint ein Hinweis darauf.
