// src/App.tsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { Main, Project, Contact, Navigation, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import PdfPage from "./components/PdfPage";
import TwoFAMFA from "./components/2FAMFA";
import Cryptomator from "./components/cryptomator";
import "./index.scss";

function MainContent() {
  const location = useLocation();
  const isPdfPage = location.pathname === "/pdf";

  return (
    <>
      {!isPdfPage ? (
        <FadeIn transitionDuration={700}>
          <Main />
          <Project />
          <Contact />
        </FadeIn>
      ) : (
        <div style={{ marginTop: "80px" }}>
          <PdfPage />
        </div>
      )}
    </>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");
  const handleModeChange = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <Routes>
          <Route path="/*" element={<MainContent />} />
          <Route path="/2FAMFA" element={<TwoFAMFA />} />
          <Route path="/cryptomator" element={<Cryptomator />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
