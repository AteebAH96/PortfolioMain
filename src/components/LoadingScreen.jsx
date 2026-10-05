import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Cinematic loading screen with:
 * - Pulsing red "REC" indicator
 * - Dynamic Premiere Pro style timecode counter (HH:MM:SS:FF)
 * - Percentage counter counting smoothly up to 100%
 * - Gradient progress bar
 * - Click anywhere to skip
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const startRef = useRef(Date.now());

  const finish = () => {
    setVisible(false);
    setTimeout(onComplete, 400);
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    let raf;

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(finish, 200);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Format progress as timecode 00:00:SS:FF */
  const frame = Math.floor(progress * 2400);
  const ff = String(frame % 30).padStart(2, "0");
  const ss = String(Math.floor(frame / 30) % 60).padStart(2, "0");
  const timecode = `00:00:${ss}:${ff}`;
  const percent = Math.min(100, Math.round(progress * 100));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onClick={finish}
          title="Click to skip"
        >
          {/* Top recording indicator */}
          <div className="loading-rec">
            <span className="rec-dot" />
            <span style={{ fontWeight: 800 }}>REC [●]</span>
            <span style={{ opacity: 0.5, fontSize: "0.8rem", marginLeft: 8 }}>4K UHD 60FPS</span>
          </div>

          {/* Timecode counter */}
          <div className="loading-timecode" style={{ textShadow: "0 0 20px rgba(167, 139, 250, 0.4)" }}>
            {timecode}
          </div>

          {/* Percentage counter */}
          <div
            style={{
              marginTop: 12,
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--accent-cyan)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            INITIALIZING WORKSPACE {percent}%
          </div>

          {/* Loading bar */}
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "1px",
              opacity: 0.7,
            }}
          >
            ATEEB HUSSAIN · PORTFOLIO 2026 · CLICK TO SKIP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
