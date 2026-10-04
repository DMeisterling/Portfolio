const en = {
  meta: {
    title: "Daniel Meisterling – Frontend-Focused Full-Stack Engineer",
    description:
      "Daniel Meisterling – frontend-focused full-stack engineer and Lead of Development. Modern web applications and SaaS products with Angular, TypeScript and .NET, from architecture to production.",
  },
  nav: {
    sections: {
      home: "Home",
      projekte: "Projects",
      erfahrung: "Experience",
      fokus: "Tech focus",
      "ueber-mich": "About",
      kontakt: "Contact",
    },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    enableLight: "Switch to light mode",
    enableDark: "Switch to dark mode",
    language: "Choose language",
  },
  hero: {
    eyebrow: "Angular · TypeScript · .NET",
    subtitle: "Frontend-Focused Full-Stack Engineer",
    intro:
      "I build modern web applications with Angular, TypeScript and .NET and take technical ownership from the initial idea to production – with a focus on SaaS products, sound architecture and production-ready software.",
    ctaProjects: "View projects",
    ctaContact: "Contact",
    portraitAlt: "Portrait of Daniel Meisterling",
    facts: [
      { value: "Lead of Development", label: "B2B SaaS at Simmeth System" },
      { value: "Since 2019", label: "building software professionally" },
      { value: "2 own products", label: "live and in production use" },
    ],
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Own products, live in production",
    intro:
      "Two applications I designed, built and operate on my own – from domain modeling through UI and API to deployment and ongoing operations.",
    live: "View live",
    caseStudy: "Technical case study",
    caseStudyPending: "Case study in progress",
    technologies: "Technologies",
    openLive: (name) => `Open ${name} live`,
    screenshotAlt: (name) => `Screenshot of ${name}`,
    items: {
      poeanalyze: {
        tagline: "Market analysis platform for Path of Exile",
        description:
          "Analyzes item prices, liquidity, historical deviations and market signals across leagues, making a volatile market with thousands of items readable.",
        highlights: [
          "Dashboards with market KPIs and league health",
          "Historical comparisons across leagues",
          "Signal detection for over- and undervalued items",
          "Filtering and search across large datasets",
          "Data visualization with interactive charts",
          "Complex domain logic in frontend and API",
        ],
      },
      fleissaufgabe: {
        tagline: "Full-stack learning platform for Japanese",
        description:
          "A learning platform with a spaced repetition system, cloud sync and flexible deck management, used by real learners to study Japanese.",
        highlights: [
          "Google authentication and persistent user data",
          "Deck and card management with import/export",
          "Study in both directions JP ↔ DE",
          "SRS logic for long-term retention",
          "Translation and reading lookup",
          "Responsive UI with light and dark mode",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Technical ownership of a B2B SaaS product",
    current: {
      role: "Lead of Development / Software Engineer",
      company: "Simmeth System GmbH",
      period: "Since May 2023",
      summary:
        "Technical ownership of the ongoing development of a B2B SaaS platform for supplier relationship management.",
      responsibilities: [
        "Development planning, roadmap and prioritization",
        "Architecture decisions for the frontend and backend of the SRM platform",
        "Frontend development with Angular and TypeScript plus full-stack feature development",
        "Coordination of security topics and penetration tests",
        "Engineering KPIs and continuous improvement of development processes",
        "Improving support and ticketing processes between development and customers",
      ],
    },
    previous: [
      {
        role: "Application Developer",
        company: "INES IT",
        period: "2020 – 2022",
        summary:
          "Development and operation of custom web applications, including databases and customer servers.",
      },
      {
        role: "Application Developer",
        company: "Raiffeisen-Tours RT-Reisen GmbH",
        period: "2019",
        summary: "Start of my professional software development career.",
      },
    ],
  },
  techFocus: {
    eyebrow: "Tech focus",
    title: "Tools I work with every day",
    groups: {
      frontend: "Frontend",
      backend: "Backend & data",
      engineering: "Engineering & operations",
    },
  },
  about: {
    eyebrow: "About me",
    title: "Complete applications, not just tickets",
    paragraphs: [
      "I'm a software engineer with a strong frontend focus and solid full-stack experience. As Lead of Development at Simmeth System GmbH, I'm responsible for the technical evolution of a B2B SaaS platform – from planning and architecture to implementation.",
      "What drives me are complete, usable products. I think about requirements from a product perspective, make pragmatic technical decisions and make sure software runs reliably in production.",
      "Alongside my job, I build and run my own applications such as PoE Analyze and Fleissaufgabe – independently, from the initial idea through design and implementation to deployment and operations.",
    ],
    strengths: [
      {
        title: "Frontend expertise",
        text: "Angular, TypeScript and a UI architecture that stays maintainable even in complex applications.",
      },
      {
        title: "Full-stack experience",
        text: ".NET APIs, SQL databases and integrations – I build features end to end, from the database to the UI.",
      },
      {
        title: "Product ownership",
        text: "Understanding requirements, setting priorities and delivering the roadmap pragmatically.",
      },
      {
        title: "Technical ownership",
        text: "Architecture, security and development processes that sustain a product in the long run.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    intro:
      "Whether it's a project inquiry, a professional exchange or feedback on one of my products – I look forward to hearing from you.",
    channels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      privacyBefore:
        "Your details are used solely to process your inquiry. For more information, see the ",
      privacyLink: "privacy policy",
      privacyAfter: ".",
      submit: "Send message",
      errorRequired: "Please fill in all fields.",
      errorEmail: "Please enter a valid email address.",
    },
  },
  footer: {
    legal: "Legal",
    imprint: "Legal notice",
    privacy: "Privacy",
  },
  legal: {
    imprintTitle: "Legal notice",
    imprintHeading: "Information pursuant to § 5 TMG",
    contactHeading: "Contact",
    phone: "Phone",
    email: "Email",
    source: "Source",
    privacyNotice:
      "This privacy policy is only available in German. The German version below is legally binding.",
  },
};

export default en;
