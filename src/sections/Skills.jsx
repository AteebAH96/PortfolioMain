import { FaClapperboard } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { skills } from "../data/data";
import { getIcon } from "../components/IconMap";
import AdobeBadge from "../components/AdobeBadge";
import { FiCode, FiMove } from "react-icons/fi";

/**
 * Skills section — split into Video and Development groups.
 * Every single skill is a draggable interactive sticker chip with authentic icons.
 */
export default function Skills() {
  const [ref, inView] = useInView(0.15);

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <section id="skills" aria-label="Skills & Tools">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h2 className="section-title">Skills & Toolset</h2>
              <p className="section-subtitle">
                My everyday development stack and creative suite
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 20,
                background: "var(--code-bg)",
                border: "1px solid var(--border-color)",
                fontSize: "0.8rem",
                color: "var(--accent-lavender)",
                marginBottom: 20,
              }}
            >
              <FiMove size={13} />
              <span>Draggable sticker chips</span>
            </div>
          </div>
        </motion.div>

        {/* Video Editing Group */}
        <div className="skills-group-title">
          <FaClapperboard size={22} color="var(--accent-pink)" />
          <span>Video Production & Motion Graphics</span>
        </div>
        <div className="skill-chips">
          {skills.video.map((skill, i) => (
            <motion.div
              className="skill-chip"
              key={skill.name}
              custom={i}
              variants={chipVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              drag
              dragElastic={0.4}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
              whileHover={{ scale: 1.08, rotate: -2, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 1.15, rotate: 4, zIndex: 30 }}
              title="Click and drag me!"
            >
              <AdobeBadge letters={skill.abbr} size={30} />
              <span style={{ fontWeight: 600 }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Web Development Group */}
        <div className="skills-group-title" style={{ marginTop: 24 }}>
          <FiCode size={22} color="var(--accent-cyan)" />
          <span>Web & Full-Stack Development</span>
        </div>
        <div className="skill-chips">
          {skills.development.map((skill, i) => {
            const IconComp = getIcon(skill.icon);
            return (
              <motion.div
                className="skill-chip"
                key={skill.name}
                custom={i + skills.video.length}
                variants={chipVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                drag
                dragElastic={0.4}
                dragTransition={{ bounceStiffness: 400, bounceDamping: 25 }}
                whileHover={{ scale: 1.08, rotate: -2, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 1.15, rotate: 4, zIndex: 30 }}
                title="Click and drag me!"
              >
                {IconComp && (
                  <IconComp
                    size={22}
                    color={skill.color}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.12))" }}
                  />
                )}
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
