import { motion } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { personalInfo } from "../data/data";
import profilePhoto from "../assets/Picsart_26-06-18_10-21-36-838.jpg";
import { FiMapPin, FiExternalLink, FiCheckCircle } from "react-icons/fi";

/**
 * About section styled with a realistic sticker/polaroid photo frame,
 * washi tape decal, highlight badges, and existing portfolio reference.
 */
export default function About() {
  const [ref, inView] = useInView(0.2);

  const highlights = [
    "Full-Stack MERN Development",
    "Cinematic Color Grading & Audio Sync",
    "Creative Motion Graphics & Transitions",
    "On-time Client Delivery in Karachi & Globally",
  ];

  return (
    <section id="about" aria-label="About me">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Bridging technical code & cinematic storytelling
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Polaroid Frame with Washi Tape */}
          <motion.div
            className="polaroid"
            style={{ position: "relative" }}
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            animate={inView ? { opacity: 1, rotate: -2.5, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
          >
            {/* Washi tape decal */}
            <div
              style={{
                position: "absolute",
                top: -12,
                left: "30%",
                width: 100,
                height: 24,
                background: "rgba(186, 192, 149, 0.65)",
                transform: "rotate(-3deg)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                zIndex: 10,
                backdropFilter: "blur(2px)",
                border: "1px dashed rgba(255,255,255,0.4)",
              }}
            />

            <div className="polaroid-img">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <p className="polaroid-label">
              {personalInfo.name} — <span style={{ color: "var(--accent-pink)" }}>Karachi</span>
            </p>
          </motion.div>

          {/* Bio text and bullet highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-text">{personalInfo.profile}</p>

            {/* Quick check highlights */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FiCheckCircle size={17} color="var(--accent-lavender)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 28,
                paddingTop: 20,
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <div className="about-location">
                <FiMapPin size={17} color="var(--accent-pink)" />
                <span style={{ fontWeight: 600 }}>{personalInfo.location}</span>
              </div>

              {personalInfo.portfolio && (
                <a
                  href={personalInfo.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 16px",
                    borderRadius: 20,
                    background: "var(--code-bg)",
                    fontSize: "0.85rem",
                  }}
                  aria-label="View existing portfolio on Vercel"
                >
                  <FiExternalLink size={14} />
                  <span>Existing Portfolio</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
