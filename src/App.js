import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LegalNotice from "./components/LegalNotice";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Security from "./components/Security";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  <title>Daniel Meisterling</title>;
  return (
    <div className={darkMode && "dark"}>
      <BrowserRouter>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="bg-slate-200 dark:bg-gray-900 text-gray-900 font-bold dark:text-white">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Portfolio />
                  <Experience />
                  <Contact />
                  <SocialLinks />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Impressum"
              element={
                <>
                  <LegalNotice />
                </>
              }
            />
            <Route
              path="/Datenschutz"
              element={
                <>
                  <Security />
                </>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
