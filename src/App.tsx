// src/App.tsx
import React, { useState, useEffect } from "react";
import { Main, Project, Contact, Navigation, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import PdfPage from "./components/PdfPage";
import TwoFAMFA from "./components/2FAMFA"; // Import de la page 2FAMFA
import Cryptomator from "./components/cryptomator"; // Import de la page Cryptomator
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.scss";

function MainContent({ mode }: { mode: string }) {
  const location = useLocation();
  const isPdfPage = location.pathname === "/pdf";

  return (
    <>
      {!isPdfPage && (
        <FadeIn transitionDuration={700}>
          <Main />
          <Project />
          <Contact />
        </FadeIn>
      )}
      {isPdfPage && (
        <div style={{ marginTop: "80px" }}>
          <PdfPage />
        </div>
      )}
    </>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Router>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <Routes>
          <Route path="/*" element={<MainContent mode={mode} />} />
          <Route path="/2FAMFA" element={<TwoFAMFA />} /> {/* Route pour 2FAMFA */}
          <Route path="/cryptomator" element={<Cryptomator />} /> {/* Route pour Cryptomator */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
