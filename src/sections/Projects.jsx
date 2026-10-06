import { FaClapperboard } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { projects } from "../data/data";
import VideoThumbnail from "../components/VideoThumbnail";
import { getVideoEmbedUrl, isTikTokUrl } from "../utils/video";
import { FiExternalLink, FiGithub, FiPlay, FiX, FiCode, FiLayers } from "react-icons/fi";

/**
 * Projects section with:
 * - Two tabs: "Web Projects" & "Video Projects"
 * - Web tab: clean cards with preview artwork, tech tags, live preview & GitHub links
 * - Video tab: cinematic video cards with hover preview, play button pulse, and lightbox modal
 * - Clearly structured for easy replacement of [PROJECT 1 to 4] in data.js
 */
export default function Projects({ mode, setMode }) {
  const [ref, inView] = useInView(0.1);
  const activeTab = mode === "editor" ? "video" : "web";
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const embedUrl = lightboxVideo ? getVideoEmbedUrl(lightboxVideo.videoUrl) : "";

  useEffect(() => {
    setLightboxVideo(null);
  }, [mode]);

  useEffect(() => {
    if (!lightboxVideo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setLightboxVideo(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxVideo]);

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Modern gradient palettes for placeholder card thumbnails
  const gradientThumbnails = [
    "linear-gradient(135deg, #f2f4e6 0%, #e1e7c3 50%, #d4de95 100%)",
    "linear-gradient(135deg, #f1f4e9 0%, #e1e8ce 50%, #cbd6af 100%)",
    "linear-gradient(135deg, #f5f5e9 0%, #e8ebd5 50%, #bac095 100%)",
    "linear-gradient(135deg, #f4f6df 0%, #e3e9bb 50%, #d4de95 100%)",
  ];

  return (
    <section id="projects" aria-label="Selected Projects">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Curated web applications & video edits
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="project-tabs" role="tablist" aria-label="Project Categories">
          <button
            role="tab"
            aria-selected={activeTab === "web"}
            className={`project-tab ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setMode("developer")}
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <FiCode size={16} />
            <span>Web Projects</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "video"}
            className={`project-tab ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setMode("editor")}
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <FaClapperboard size={16} />
            <span>Video Projects</span>
          </button>
        </div>

        {/* Projects Grid Container */}
        <AnimatePresence mode="wait">
          {activeTab === "web" && (
            <motion.div
              key="web"
              className="projects-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {projects.web.map((proj, i) => (
                <motion.div
                  className="project-card"
                  key={proj.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div
                    className="project-thumb"
                    style={{
                      background: proj.image
                        ? "transparent"
                        : gradientThumbnails[i % gradientThumbnails.length],
                    }}
                  >
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} loading="lazy" />
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 8,
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        <FiLayers size={36} color="var(--accent-lavender)" />
                        <span className="project-thumb-placeholder" style={{ color: "#3d4127" }}>
                          {proj.title}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            background: "rgba(255,255,255,0.15)",
                            padding: "2px 10px",
                            borderRadius: 12,
                          }}
                        >
                          MERN Application
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                    <div className="project-tags">
                      {proj.tech.map((t) => (
                        <span className="project-tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${proj.title} live demo`}
                      >
                        <FiExternalLink size={15} /> Live Demo
                      </a>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${proj.title} GitHub repository`}
                      >
                        <FiGithub size={15} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "video" && (
            <motion.div
              key="video"
              className="projects-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {projects.video.map((vid, i) => (
                <motion.div
                  className="video-card"
                  key={vid.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  onClick={() => setLightboxVideo(vid)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxVideo(vid)}
                  aria-label={`Open ${vid.title} preview`}
                >
                  <div
                    className="video-thumb"
                    style={{
                      background: vid.thumbnail
                        ? "transparent"
                        : gradientThumbnails[(i + 2) % gradientThumbnails.length],
                    }}
                  >
                    <VideoThumbnail video={vid}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 6,
                          color: "#3d4127",
                        }}
                      >
                        <FaClapperboard size={34} color="var(--accent-pink)" />
                        <span className="video-thumb-placeholder" style={{ color: "#3d4127" }}>
                          {vid.title}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontFamily: "'JetBrains Mono', monospace",
                            background: "rgba(255,255,255,0.6)",
                            padding: "2px 8px",
                            borderRadius: 4,
                          }}
                        >
                          4K UHD · 00:45
                        </span>
                      </div>
                    </VideoThumbnail>
                    <div className="video-play-btn">
                      <span className="play-icon">
                        <FiPlay />
                      </span>
                    </div>
                  </div>
                  <div className="video-body">
                    <h3>{vid.title}</h3>
                    <p>{vid.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Lightbox Player Modal */}
        <AnimatePresence>
          {lightboxVideo && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxVideo(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Video Player Modal"
            >
              <button
                className="lightbox-close"
                onClick={() => setLightboxVideo(null)}
                aria-label="Close modal"
              >
                <FiX />
              </button>
              <div
                className={`lightbox-content ${isTikTokUrl(lightboxVideo.videoUrl) ? "lightbox-portrait" : ""}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(99, 107, 47, 0.2)",
                  padding: embedUrl ? 0 : 36,
                  textAlign: "center",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={lightboxVideo.title}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    style={{ borderRadius: 12 }}
                  />
                ) : (
                  <div>
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background: "rgba(99, 107, 47, 0.15)",
                        color: "var(--accent-pink)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <FaClapperboard size={32} />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: 8 }}>
                      {lightboxVideo.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", maxWidth: 460, margin: "0 auto 16px", fontSize: "0.95rem" }}>
                      {lightboxVideo.description}
                    </p>
                    <div
                      style={{
                        padding: "12px 18px",
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.05)",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        color: "var(--accent-cyan)",
                        display: "inline-block",
                      }}
                    >
                      {lightboxVideo.videoUrl ? (
                        <a href={lightboxVideo.videoUrl} target="_blank" rel="noopener noreferrer">
                          Open video on TikTok
                        </a>
                      ) : "Video coming soon"}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
