import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, floatingIcons, adobeTools } from "../data/data";
import FloatingIcon from "../components/FloatingIcon";
import AdobeBadge from "../components/AdobeBadge";
import { getIcon } from "../components/IconMap";
import { FiCode, FiArrowDown } from "react-icons/fi";
import { FaClapperboard } from "react-icons/fa6";

/**
 * Hero section with:
 * - Pastel gradient background & faint graph-paper grid overlay
 * - Big bold sans-serif name with Split Identity (hover/click switches Developer & Video Editor mode)
 * - Rotating titles combining bold sans + Playfair Display Italic
 * - Floating, tilted, draggable tool icon stickers (Adobe badges + VS Code + Web stack)
 * - Mobile responsive icon reduction
 * - Action buttons: "View Work" and "Contact Me"
 */
export default function Hero({ mode, toggleMode }) {
  const titles = [
    { prefix: "MERN Stack", italic: "Developer" },
    { prefix: "Cinematic", italic: "Video Editor" },
    { prefix: "Creative", italic: "Full-Stack Builder" },
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Rotate titles every 2.8s */
  useEffect(() => {
    const iv = setInterval(() => {
      setTitleIdx((p) => (p + 1) % titles.length);
    }, 2800);
    return () => clearInterval(iv);
  }, [titles.length]);

  /* On mobile, show fewer icons to prevent clutter */
  const visibleIcons = isMobile ? floatingIcons.slice(0, 5) : floatingIcons;
  const visibleAdobe = isMobile ? adobeTools.slice(0, 2) : adobeTools;

  return (
    <section className="hero-section" id="hero" aria-label="Hero Introduction">
      {/* Faint Graph-paper grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Floating draggable tech stickers */}
      {visibleIcons.map((item, i) => {
        const IconComp = getIcon(item.icon);
        return (
          <FloatingIcon
            key={item.name}
            x={item.x}
            y={item.y}
            index={i}
            delay={i * 0.15}
          >
            <div
              className="sticker-badge"
              title={`${item.name} (Draggable)`}
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                background: "var(--bg-card)",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.4)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glossy top shine */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "38%",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, transparent 100%)",
                  borderRadius: "14px 14px 0 0",
                  pointerEvents: "none",
                }}
              />
              {IconComp && (
                <IconComp
                  size={26}
                  color={item.color}
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
                />
              )}
            </div>
          </FloatingIcon>
        );
      })}

      {/* Floating draggable Adobe stickers */}
      {visibleAdobe.map((tool, i) => (
        <FloatingIcon
          key={tool.name}
          x={tool.x}
          y={tool.y}
          index={floatingIcons.length + i}
          delay={i * 0.2 + 0.4}
        >
          <div title={`${tool.name} (Draggable)`}>
            <AdobeBadge letters={tool.abbr} size={54} />
          </div>
        </FloatingIcon>
      ))}

      {/* Hero content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        {/* Split Identity Interactive Name */}
        <div
          style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
          onClick={toggleMode}
          onMouseEnter={() => setNameHovered(true)}
          onMouseLeave={() => setNameHovered(false)}
          title="Click to toggle Developer / Video Editor Mode"
        >
          <motion.div
            initial={false}
            animate={{ scale: nameHovered ? 1.03 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <h1 className="hero-name">
              {mode === "developer" ? (
                <span className="hero-name-gradient">
                  &lt;{personalInfo.name} /&gt;
                </span>
              ) : (
                <span className="hero-editor-name">
                  <FaClapperboard className="hero-video-icon" aria-hidden="true" />
                  <span className="hero-name-gradient">{personalInfo.name}</span>
                </span>
              )}
            </h1>
          </motion.div>

          {/* Interactive Mode Tooltip / Indicator */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 20,
              background: "var(--glass-bg)",
              border: "1px solid var(--border-color)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--accent-lavender)",
              marginBottom: 12,
              backdropFilter: "blur(10px)",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.25s ease",
            }}
          >
            {mode === "developer" ? <FiCode size={13} /> : <FaClapperboard size={13} />}
            <span>
              Mode:{" "}
              <strong>
                {mode === "developer" ? "Developer" : "Video Editor"}
              </strong>{" "}
              (Click name to flip)
            </span>
          </div>
        </div>

        {/* Rotating title: bold sans + Playfair italic */}
        <div className="hero-rotating-title" aria-live="polite">
          <span>{titles[titleIdx].prefix}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIdx}
              className="hero-italic"
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {titles[titleIdx].italic}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="hero-tagline">{personalInfo.tagline}</p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
