/**
 * AdobeBadge — Reusable rounded-square sticker badge for Adobe tools.
 * Props:
 *  - letters: "Pr" | "Ae" | "Me"
 *  - bg: background color (default #00005B)
 *  - color: font color (default #9999FF)
 *  - size: pixel width & height (default 56)
 */
export default function AdobeBadge({
  letters = "Pr",
  bg = "#00005B",
  color = "#9999FF",
  size = 56,
}) {
  return (
    <div
      className="adobe-badge"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        background: `linear-gradient(145deg, #050570 0%, ${bg} 60%, #000038 100%)`,
        color: color,
        fontSize: Math.round(size * 0.42),
        fontWeight: 800,
        fontFamily: "'Inter', -apple-system, sans-serif",
        borderRadius: Math.round(size * 0.28),
        border: `1.5px solid rgba(153, 153, 255, 0.35)`,
        boxShadow: `0 8px 24px rgba(0, 0, 91, 0.45), 0 2px 6px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
      }}
      aria-label={`Adobe ${letters}`}
    >
      {/* Subtle glossy sticker reflection */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
          borderRadius: `${Math.round(size * 0.28)}px ${Math.round(size * 0.28)}px 0 0`,
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 2, letterSpacing: "-0.5px" }}>{letters}</span>
    </div>
  );
}
