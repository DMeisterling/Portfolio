const de = {
  meta: {
    title: "Daniel Meisterling – Frontend-fokussierter Full-Stack-Engineer",
    description:
      "Daniel Meisterling – Frontend-fokussierter Full-Stack-Engineer und Lead of Development. Moderne Webanwendungen und SaaS-Produkte mit Angular, TypeScript und .NET, von der Architektur bis zum produktiven Betrieb.",
  },
  nav: {
    sections: {
      home: "Start",
      projekte: "Projekte",
      erfahrung: "Erfahrung",
      fokus: "Tech-Fokus",
      "ueber-mich": "Über mich",
      kontakt: "Kontakt",
    },
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    enableLight: "Hellen Modus aktivieren",
    enableDark: "Dunklen Modus aktivieren",
    language: "Sprache wählen",
  },
  hero: {
    eyebrow: "Angular · TypeScript · .NET",
    subtitle: "Frontend-fokussierter Full-Stack-Engineer",
    intro:
      "Ich entwickle moderne Webanwendungen mit Angular, TypeScript und .NET und übernehme technische Verantwortung von der Idee bis zum produktiven Betrieb – mit Fokus auf SaaS-Produkte, tragfähige Architektur und produktionsreife Software.",
    ctaProjects: "Projekte ansehen",
    ctaContact: "Kontakt",
    portraitAlt: "Porträt von Daniel Meisterling",
    facts: [
      { value: "Lead of Development", label: "B2B-SaaS bei Simmeth System" },
      { value: "Seit 2019", label: "professionell in der Softwareentwicklung" },
      { value: "2 eigene Produkte", label: "live und produktiv im Einsatz" },
    ],
  },
  projects: {
    eyebrow: "Ausgewählte Projekte",
    title: "Eigene Produkte, live im Betrieb",
    intro:
      "Zwei Anwendungen, die ich eigenständig konzipiert und entwickelt habe und selbst betreibe – von der Domänenmodellierung über UI und API bis zu Deployment und laufendem Betrieb.",
    live: "Live ansehen",
    caseStudy: "Technische Case Study",
    caseStudyPending: "Case Study in Vorbereitung",
    technologies: "Technologien",
    openLive: (name) => `${name} live öffnen`,
    screenshotAlt: (name) => `Screenshot von ${name}`,
    items: {
      poeanalyze: {
        tagline: "Marktanalyse-Plattform für Path of Exile",
        description:
          "Analysiert Itempreise, Liquidität, historische Abweichungen und Marktsignale über verschiedene Ligen hinweg und macht einen volatilen Markt mit Tausenden Items lesbar.",
        highlights: [
          "Dashboards mit Markt-KPIs und Liga-Zustand",
          "Historische Vergleiche über Ligen hinweg",
          "Signalerkennung für Über- und Unterbewertungen",
          "Filterung und Suche über große Datenmengen",
          "Datenvisualisierung mit interaktiven Charts",
          "Komplexe Domänenlogik in Frontend und API",
        ],
      },
      fleissaufgabe: {
        tagline: "Full-Stack-Lernplattform für Japanisch",
        description:
          "Eine Lernplattform mit Spaced-Repetition-System, Cloud-Sync und flexibler Deck-Verwaltung, die von echten Nutzern zum Japanischlernen verwendet wird.",
        highlights: [
          "Google-Authentifizierung und persistente Nutzerdaten",
          "Deck- und Kartenverwaltung mit Import/Export",
          "Lernen in beide Richtungen JP ↔ DE",
          "SRS-Lernlogik für nachhaltiges Wiederholen",
          "Nachschlagen von Übersetzungen und Lesungen",
          "Responsive UI mit Light- und Dark-Mode",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Berufserfahrung",
    title: "Technische Verantwortung für ein B2B-SaaS-Produkt",
    current: {
      role: "Lead of Development / Software Engineer",
      company: "Simmeth System GmbH",
      period: "Seit Mai 2023",
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
    previous: [
      {
        role: "Anwendungsentwickler",
        company: "INES IT",
        period: "2020 – 2022",
        summary:
          "Entwicklung und Betrieb kundenspezifischer Webanwendungen inklusive Datenbanken und Kundenservern.",
      },
      {
        role: "Anwendungsentwickler",
        company: "Raiffeisen-Tours RT-Reisen GmbH",
        period: "2019",
        summary: "Einstieg in die professionelle Softwareentwicklung.",
      },
    ],
  },
  techFocus: {
    eyebrow: "Technischer Fokus",
    title: "Werkzeuge, mit denen ich täglich arbeite",
    groups: {
      frontend: "Frontend",
      backend: "Backend & Daten",
      engineering: "Engineering & Betrieb",
    },
  },
  about: {
    eyebrow: "Über mich",
    title: "Vollständige Anwendungen statt einzelner Tickets",
    paragraphs: [
      "Ich bin Software-Engineer mit klarem Schwerpunkt im Frontend und fundierter Full-Stack-Erfahrung. Als Lead of Development bei der Simmeth System GmbH verantworte ich die technische Weiterentwicklung einer B2B-SaaS-Plattform – von der Planung und Architektur bis zur Umsetzung.",
      "Mich interessieren vor allem vollständige, nutzbare Produkte. Ich denke Anforderungen aus Produktsicht mit, treffe pragmatische technische Entscheidungen und sorge dafür, dass Software zuverlässig in Produktion läuft.",
      "Neben meinem Beruf entwickle und betreibe ich eigene Anwendungen wie PoE Analyze und Fleissaufgabe – eigenständig von der Idee über Design und Implementierung bis zu Deployment und Betrieb.",
    ],
    strengths: [
      {
        title: "Frontend-Kompetenz",
        text: "Angular, TypeScript und eine UI-Architektur, die auch in komplexen Anwendungen wartbar bleibt.",
      },
      {
        title: "Full-Stack-Erfahrung",
        text: ".NET-APIs, SQL-Datenbanken und Integrationen – Features setze ich durchgängig von der Datenbank bis zur Oberfläche um.",
      },
      {
        title: "Product Ownership",
        text: "Anforderungen verstehen, Prioritäten setzen und die Roadmap pragmatisch umsetzen.",
      },
      {
        title: "Technische Verantwortung",
        text: "Architektur, Security und Entwicklungsprozesse, die ein Produkt langfristig tragen.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns sprechen",
    intro:
      "Ob Projektanfrage, fachlicher Austausch oder Feedback zu einem meiner Produkte – ich freue mich über Ihre Nachricht.",
    channels: { email: "E-Mail", linkedin: "LinkedIn", github: "GitHub" },
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      privacyBefore:
        "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Details finden Sie in der ",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: ".",
      submit: "Nachricht senden",
      errorRequired: "Bitte füllen Sie alle Felder aus.",
      errorEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    },
  },
  footer: {
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
  legal: {
    imprintTitle: "Impressum",
    imprintHeading: "Angaben gemäß § 5 TMG",
    contactHeading: "Kontakt",
    phone: "Telefon",
    email: "E-Mail",
    source: "Quelle",
    privacyNotice: null,
  },
};

export default de;
