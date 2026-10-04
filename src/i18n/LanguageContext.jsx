import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import de from "./de";
import en from "./en";

export const dictionaries = { de, en };
export const languages = Object.keys(dictionaries);

const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE = "de";

const listeners = new Set();
let unstoredLanguage = null;

const readLanguage = () => {
  if (unstoredLanguage) return unstoredLanguage;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return languages.includes(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const subscribe = (listener) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

// Prerendered HTML is German, so hydration starts with the default language.
const getServerLanguage = () => DEFAULT_LANGUAGE;

const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: dictionaries[DEFAULT_LANGUAGE],
});

export const LanguageProvider = ({ children }) => {
  const lang = useSyncExternalStore(subscribe, readLanguage, getServerLanguage);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const setLang = useCallback((code) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
      unstoredLanguage = null;
    } catch {
      unstoredLanguage = code;
    }
    listeners.forEach((listener) => listener());
  }, []);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
