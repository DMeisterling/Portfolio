import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import de from "./de";
import en from "./en";

export const dictionaries = { de, en };
export const languages = Object.keys(dictionaries);

const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE = "de";

const readStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return languages.includes(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: dictionaries[DEFAULT_LANGUAGE],
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readStoredLanguage);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
