import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useAnimations";

/**
 * FloatingIcon — floating sticker badge that:
 * - is slightly tilted
 * - floats gently up & down (bobbing)
 * - reacts to mouse movement with parallax
 * - is draggable anywhere on the screen
 */
export default function FloatingIcon({
  children,
  x = 50,
  y = 50,
  delay = 0,
  index = 0,
}) {
  const mouse = useMousePosition();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  /* Subtle parallax reaction to mouse pointer */
  useEffect(() => {
    if (isDragging) return;
    const factor = 0.015 + (index % 4) * 0.004;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    setOffset({
      x: (mouse.x - cx) * factor,
      y: (mouse.y - cy) * factor,
    });
  }, [mouse, index, isDragging]);

  // Subtle tilt for each sticker
  const baseTilt = [-6, 5, -4, 7, -8, 4, -5, 6, -3, 8][index % 10];

  return (
    <motion.div
      ref={containerRef}
      className="floating-icon"
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        position: "absolute",
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: isDragging ? 50 : 3,
        userSelect: "none",
        touchAction: "none",
      }}
      animate={
        isDragging
          ? { scale: 1.12, rotate: baseTilt * 1.3 }
          : {
              x: offset.x,
              y: [offset.y - 7, offset.y + 7, offset.y - 7],
              rotate: baseTilt,
            }
      }
      transition={
        isDragging
          ? { type: "spring", stiffness: 300, damping: 20 }
          : {
              y: {
                repeat: Infinity,
                duration: 3.2 + (index % 3) * 0.5,
                ease: "easeInOut",
                delay: delay,
              },
              x: { duration: 0.5, ease: "easeOut" },
              rotate: { duration: 0.4 },
            }
      }
      whileHover={{ scale: 1.15, rotate: 0 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
