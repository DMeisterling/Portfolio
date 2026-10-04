# Portfolio – Daniel Meisterling

Persönliche Portfolio-Website (deutschsprachig), live unter [danielmeisterling.de](https://danielmeisterling.de).

## Stack

React 18 (Create React App), Tailwind CSS 3, React Router, react-scroll. Deployment über Netlify.

## Entwicklung

```bash
npm install
npm start                          # Dev-Server auf http://localhost:3000
npm run build                      # Produktions-Build nach build/
npm test -- --watchAll=false       # Smoke-Tests
npx eslint "src/**/*.{js,jsx}"     # Linting
```

## Inhalte pflegen

Alle Inhalte (Projekte, Berufserfahrung, Tech-Fokus, Kontaktdaten, Navigation) liegen zentral in
`src/data/profile.js`. Komponenten unter `src/components/` rendern nur.

- **Projekt-Screenshots:** `src/assets/projects/` (WebP, 1440×900). Fehlt ein Screenshot, zeigt die Karte einen Platzhalter.
- **Technische Case Study:** `caseStudyUrl` am Projekt setzen – solange `null`, erscheint „Case Study in Vorbereitung“.
- **SEO / Social Sharing:** Meta-Tags und JSON-LD in `public/index.html`, Vorschaubild `public/og-image.jpg` (1200×630).
