import { useState, useCallback, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MarqueeStrip from "./components/MarqueeStrip";
import TeaserStrip from "./components/TeaserStrip";
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

  const showProject = (projectMode, projectId) => {
    setMode(projectMode);

    const targetId = `project-${projectMode}-${projectId}`;
    const startedAt = performance.now();
    const scrollWhenReady = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (performance.now() - startedAt < 1200) {
        requestAnimationFrame(scrollWhenReady);
      }
    };

    requestAnimationFrame(scrollWhenReady);
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
        <Hero mode={mode} setMode={setMode} />
        <TeaserStrip onSelect={showProject} />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <Projects mode={mode} setMode={setMode} />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
