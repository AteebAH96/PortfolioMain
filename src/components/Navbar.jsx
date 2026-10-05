import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Navbar with smooth scroll links, theme toggle, and mobile hamburger menu.
 */
export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;
    // Close outside the glass card, while allowing the toggle to handle itself.
    const closeOutside = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) setMobileOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <a href="#" className="nav-logo" aria-label="Home">
          AH
        </a>

        <ul ref={menuRef} id="navigation-links" className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>

        <button
          ref={toggleRef}
          className={`nav-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="navigation-links"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
