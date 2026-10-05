import { useState, useCallback, useEffect } from "react";
import { FaClapperboard } from "react-icons/fa6";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MarqueeStrip from "./components/MarqueeStrip";
import SquigglyLine from "./components/SquigglyLine";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

/**
 * Main App component.
 * Manages: loading state, theme (light/dark), mode (developer/editor).
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme-v2") || "light";
    }
    return "light";
  });
  const [mode, setMode] = useState("developer"); // "developer" or "editor"

  /* Apply theme to document */
  const applyTheme = useCallback((t) => {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("portfolio-theme-v2", t);
  }, []);

  /* Initial theme set */
  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  /* Sync mode attribute to root */
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "developer" ? "editor" : "developer"));
  };

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Squiggly scroll-draw line */}
      <SquigglyLine />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main data-mode={mode}>
        <Hero mode={mode} toggleMode={toggleMode} setMode={setMode} />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <Projects mode={mode} setMode={setMode} />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Mode toggle pill */}
      <button
        className="mode-indicator"
        onClick={toggleMode}
        aria-label={`Switch to ${mode === "developer" ? "Video Editor" : "Developer"} mode`}
        title="Click to toggle Developer / Video Editor mode"
      >
        <span className={`mode-dot ${mode === "developer" ? "dev" : "editor"}`} />
        {mode === "editor" && <FaClapperboard size={15} color="var(--accent-pink)" aria-hidden="true" />}
        <span>{mode === "developer" ? "⚡ Developer Mode" : "Editor Mode"}</span>
      </button>
    </>
  );
}
