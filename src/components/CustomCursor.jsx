import { useEffect, useState, useRef } from "react";
import { useMousePosition, usePrefersReducedMotion } from "../hooks/useAnimations";

/**
 * Custom cursor with outer magnetic ring + inner glowing dot.
 * Expands and changes shape when hovering over interactive elements.
 * Hidden on touch devices and disabled if prefers-reduced-motion is true.
 */
export default function CustomCursor() {
  const mouse = useMousePosition();
  const reducedMotion = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (mouse.x > 0 || mouse.y > 0) {
      setHasMoved(true);
    }
  }, [mouse]);

  /* Lerp the outer ring for fluid momentum */
  useEffect(() => {
    if (reducedMotion) return;
    let raf;
    const animate = () => {
      posRef.current.x += (mouse.x - posRef.current.x) * 0.18;
      posRef.current.y += (mouse.y - posRef.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [mouse, reducedMotion]);

  /* Detect interactive elements */
  useEffect(() => {
    const onOver = (e) => {
      const target = e.target.closest(
        "a, button, [role='button'], input, textarea, .skill-chip, .project-card, .video-card, .floating-icon, .nav-toggle, .theme-toggle, .contact-btn, .social-link, .project-tab, .polaroid, .timeline-clip"
      );
      setHovering(!!target);
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, []);

  if (reducedMotion || !hasMoved) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
        }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 100000,
          opacity: hovering ? 0.3 : 1,
        }}
        aria-hidden="true"
      />
    </>
  );
}
