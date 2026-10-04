import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LegalNotice from "./components/LegalNotice";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { scrollToSection } from "./components/ScrollLink";
import Security from "./components/Security";
import TechFocus from "./components/TechFocus";
import { LanguageProvider } from "./i18n/LanguageContext";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToSection(decodeURIComponent(hash.slice(1)));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <LanguageProvider>
      <ScrollManager />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Portfolio />
                <Experience />
                <TechFocus />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/Impressum" element={<LegalNotice />} />
          <Route path="/Datenschutz" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
