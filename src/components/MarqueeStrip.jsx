import { skills } from "../data/data";
import { getIcon } from "../components/IconMap";

/**
 * Marquee strip — infinitely scrolling skill names with icons.
 * Duplicate items to create the seamless loop effect.
 */
export default function MarqueeStrip() {
  const allSkills = [
    ...skills.video.map((s) => ({ name: s.name, icon: null, abbr: s.abbr })),
    ...skills.development.map((s) => ({ name: s.name, icon: s.icon, color: s.color })),
  ];

  /* Double the array for seamless loop */
  const doubled = [...allSkills, ...allSkills];

  return (
    <div className="marquee-container" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((s, i) => {
          const IconComp = s.icon ? getIcon(s.icon) : null;
          return (
            <span className="marquee-item" key={`${s.name}-${i}`}>
              {IconComp && <IconComp size={16} color={s.color || "var(--text-muted)"} />}
              {s.abbr && (
                <span
                  style={{
                    background: "#00005B",
                    color: "#9999FF",
                    padding: "2px 6px",
                    borderRadius: 4,
                    fontSize: "0.7rem",
                    fontWeight: 800,
                  }}
                >
                  {s.abbr}
                </span>
              )}
              {s.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
