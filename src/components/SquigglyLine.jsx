import { useEffect, useRef, useState } from "react";

/**
 * Hand-drawn squiggly SVG line that runs between sections and draws itself
 * progressively as the user scrolls down the page.
 */
export default function SquigglyLine() {
  const pathRef = useRef(null);
  const [docHeight, setDocHeight] = useState(1);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        setDocHeight(Math.ceil(footer.getBoundingClientRect().bottom + window.scrollY));
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    for (const element of document.querySelectorAll("main, footer")) {
      observer.observe(element);
    }
    window.addEventListener("resize", updateSize);
    // Re-check after assets load
    const t = setTimeout(updateSize, 1000);
    return () => {
      window.removeEventListener("resize", updateSize);
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  // Generate a hand-drawn wavy path down the full height
  const waveSegment = 500;
  const segments = Math.ceil(docHeight / waveSegment);
  let d = "M 60 0";
  for (let i = 0; i < segments; i++) {
    const startY = i * waveSegment;
    const endY = Math.min((i + 1) * waveSegment, docHeight);
    const segmentHeight = endY - startY;
    const cp1Y = startY + segmentHeight * 0.33;
    const cp2Y = startY + segmentHeight * 0.66;

    // Alternate wavy curves
    const cp1X = i % 2 === 0 ? 10 : 110;
    const cp2X = i % 2 === 0 ? 110 : 10;
    const endX = 60;

    d += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  }

  useEffect(() => {
    if (!pathRef.current) return;
    try {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
      pathRef.current.style.strokeDasharray = `${len}`;
      pathRef.current.style.strokeDashoffset = `${len}`;
    } catch {
      /* ignore if unmounted */
    }
  }, [docHeight, d]);

  useEffect(() => {
    if (!pathLength) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollMax =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / (scrollMax || 1)));

      if (pathRef.current) {
        // Draw the line as scroll progresses
        const offset = pathLength * (1 - progress);
        pathRef.current.style.strokeDashoffset = `${offset}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <div
      className="squiggly-line-container"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 120,
        height: docHeight,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <svg
        width="120"
        height={docHeight}
        viewBox={`0 0 120 ${docHeight}`}
        style={{ overflow: "hidden" }}
      >
        {/* Faint guide track */}
        <path
          d={d}
          fill="none"
          stroke="var(--accent-lavender)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          opacity="0.12"
        />
        {/* Animated drawing line */}
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="url(#squiggly-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.08s linear" }}
        />
        <defs>
          <linearGradient id="squiggly-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-pink)" />
            <stop offset="50%" stopColor="var(--accent-lavender)" />
            <stop offset="100%" stopColor="var(--accent-cyan)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
