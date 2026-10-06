import { FaClapperboard } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { experience } from "../data/data";
import { FiPlay, FiVolume2, FiSliders, FiClock, FiCheckCircle } from "react-icons/fi";

/**
 * Experience section styled like an authentic Adobe Premiere Pro Timeline.
 * Features:
 * - Sequence panel title with timecode counter and 24.00fps indicator
 * - Professional track headers: V2, V1, A1, A2 with Target, Mute (M), Solo (S), Lock
 * - Experience clips plotted along the year ruler (2022 to 2026)
 * - Red scrubber playhead that tracks with page scroll
 * - Clip inspector panel with role, company, dates, and detailed bullet points
 */
export default function Experience() {
  const [ref, inView] = useInView(0.1);
  const [activeExp, setActiveExp] = useState(experience[0]);
  const [playheadPos, setPlayheadPos] = useState(25);
  const tracksRef = useRef(null);

  /* Timeline years range */
  const minYear = 2022;
  const maxYear = 2026;
  const totalYears = maxYear - minYear;
  const years = [2022, 2023, 2024, 2025, 2026];

  /* Move playhead based on scroll position */
  useEffect(() => {
    const handleScroll = () => {
      if (!tracksRef.current) return;
      const rect = tracksRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));
      // Constrain playhead between 5% and 95% of track width
      setPlayheadPos(5 + progress * 90);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Calculate clip position & width */
  const getClipStyle = (exp) => {
    const left = ((exp.startYear - minYear) / totalYears) * 100;
    const width = ((exp.endYear - exp.startYear) / totalYears) * 100;
    return {
      left: `${Math.max(left, 2)}%`,
      width: `${Math.min(Math.max(width, 24), 100 - Math.max(left, 2))}%`,
    };
  };

  return (
    <section id="experience" aria-label="Experience Timeline" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Timeline of professional roles & client projects
          </p>
        </motion.div>

        <motion.div
          className="timeline-wrapper"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Premiere Pro Sequence Control Bar */}
          <div className="timeline-header">
            <div className="timeline-title-bar">
              <span style={{ color: "var(--accent-lavender)", display: "flex", alignItems: "center", gap: 6 }}>
                <FiSliders size={14} />
                <strong>Sequence_Career.prproj</strong>
              </span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ color: "#22d3ee" }}>24.00 fps</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ color: "#ff4d4d", display: "inline-flex", alignItems: "center", gap: 4 }}>
                <span className="rec-dot" style={{ width: 8, height: 8 }} />
                <span>00;00;{String(Math.floor(playheadPos * 0.4)).padStart(2, "0")};{String(Math.floor(playheadPos % 24)).padStart(2, "0")}</span>
              </span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", gap: 12 }}>
              <span>Click any clip to inspect</span>
            </div>
          </div>

          <p className="timeline-swipe-hint">Swipe the timeline to explore, then tap a clip.</p>
          <div className="timeline-scroll" tabIndex={0} role="region" aria-label="Career timeline, scroll horizontally to explore">
          <div className="timeline-canvas">
          {/* Time Ruler */}
          <div className="timeline-ruler">
            {years.map((yr) => (
              <div className="timeline-ruler-mark" key={yr}>
                <span>{yr}</span>
              </div>
            ))}
          </div>

          {/* Multi-Track Container */}
          <div
            className="timeline-tracks"
            ref={tracksRef}
            style={{ position: "relative", minHeight: 180 }}
          >
            {/* Playhead red indicator */}
            <div
              className="timeline-playhead"
              style={{
                left: `calc(90px + (100% - 100px) * ${playheadPos / 100})`,
                zIndex: 20,
              }}
              title="Current Timeline Playhead"
            />

            {/* Video Track 2 (V2 - decorative) */}
            <div className="timeline-track" style={{ minHeight: 40, opacity: 0.6 }}>
              <div className="track-label">
                <span style={{ fontWeight: 700 }}>V2</span>
                <span style={{ fontSize: "0.6rem", marginLeft: 4, opacity: 0.7 }}>B-Roll</span>
              </div>
              <div className="track-content" style={{ background: "rgba(0,0,0,0.15)" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "25%",
                    width: "35%",
                    top: 4,
                    bottom: 4,
                    borderRadius: 4,
                    background: "rgba(96, 165, 250, 0.2)",
                    border: "1px dashed rgba(96, 165, 250, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 8,
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Overlay_Graphics.mov
                </div>
              </div>
            </div>

            {/* Video Track 1 (V1) */}
            <div className="timeline-track" style={{ minHeight: 68 }}>
              <div className="track-label">
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FaClapperboard size={12} />
                  <span style={{ fontWeight: 800 }}>V1</span>
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
                  <span style={{ fontSize: "0.6rem", padding: "1px 3px", background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>M</span>
                  <span style={{ fontSize: "0.6rem", padding: "1px 3px", background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>S</span>
                </div>
              </div>
              <div className="track-content">
                {experience
                  .filter((e) => e.track === "video")
                  .map((exp) => {
                    const isSelected = activeExp?.id === exp.id;
                    return (
                      <div
                        key={exp.id}
                        className="timeline-clip"
                        style={{
                          ...getClipStyle(exp),
                          background: "linear-gradient(135deg, #426a9c 0%, #304f75 100%)",
                          outline: isSelected ? "2px solid #ffffff" : "none",
                          boxShadow: isSelected ? "0 0 15px rgba(255,255,255,0.4)" : "none",
                          cursor: "pointer",
                        }}
                        onClick={() => setActiveExp(exp)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${exp.role}`}
                        onKeyDown={(e) => e.key === "Enter" && setActiveExp(exp)}
                      >
                        <span className="clip-role" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {isSelected && <span style={{ color: "#22d3ee" }}>●</span>}
                          {exp.role}
                        </span>
                        <span className="clip-company">{exp.company}</span>
                        <span className="clip-period">{exp.period}</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Audio Track 1 (A1) */}
            <div className="timeline-track" style={{ minHeight: 68 }}>
              <div className="track-label">
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <FiVolume2 size={12} />
                  <span style={{ fontWeight: 800 }}>A1</span>
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
                  <span style={{ fontSize: "0.6rem", padding: "1px 3px", background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>M</span>
                  <span style={{ fontSize: "0.6rem", padding: "1px 3px", background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>S</span>
                </div>
              </div>
              <div className="track-content">
                {experience
                  .filter((e) => e.track === "audio")
                  .map((exp) => {
                    const isSelected = activeExp?.id === exp.id;
                    return (
                      <div
                        key={exp.id}
                        className="timeline-clip"
                        style={{
                          ...getClipStyle(exp),
                          background: "linear-gradient(135deg, #397586 0%, #285563 100%)",
                          outline: isSelected ? "2px solid #ffffff" : "none",
                          boxShadow: isSelected ? "0 0 15px rgba(255,255,255,0.4)" : "none",
                          cursor: "pointer",
                        }}
                        onClick={() => setActiveExp(exp)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${exp.role}`}
                        onKeyDown={(e) => e.key === "Enter" && setActiveExp(exp)}
                      >
                        <span className="clip-role" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {isSelected && <span style={{ color: "#22d3ee" }}>●</span>}
                          {exp.role}
                        </span>
                        <span className="clip-company">{exp.company}</span>
                        <span className="clip-period">{exp.period}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          </div>
          </div>

          {/* Premiere Pro Clip Inspector / Detail Card */}
          <AnimatePresence mode="wait">
            {activeExp && (
              <motion.div
                className="exp-detail-card"
                key={activeExp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: activeExp.track === "video" ? "#426a9c" : "#397586",
                        }}
                      />
                      <h3 style={{ fontSize: "1.25rem", margin: 0, fontWeight: 700 }}>
                        {activeExp.role}
                      </h3>
                    </div>
                    <h4 style={{ margin: "4px 0 12px 18px", fontSize: "0.95rem" }}>
                      {activeExp.company}
                    </h4>
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      color: "var(--accent-lavender)",
                      padding: "4px 12px",
                      background: "rgba(66, 106, 156, 0.1)",
                      borderRadius: 20,
                      border: "1px solid rgba(66, 106, 156, 0.2)",
                    }}
                  >
                    <FiClock size={12} style={{ marginRight: 6, verticalAlign: "middle" }} />
                    {activeExp.period}
                  </div>
                </div>

                <ul style={{ marginTop: 12 }}>
                  {activeExp.bullets.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, paddingLeft: 0, marginBottom: 8 }}>
                      <FiCheckCircle
                        size={15}
                        color="var(--accent-cyan)"
                        style={{ flexShrink: 0, marginTop: 4 }}
                      />
                      <span style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
