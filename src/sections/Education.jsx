import { motion } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { education } from "../data/data";
import { FiBookOpen } from "react-icons/fi";

/**
 * Education section with gradient-topped cards.
 */
export default function Education() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="education" aria-label="Education" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic background</p>
        </motion.div>

        <div className="education-cards">
          {education.map((edu, i) => (
            <motion.div
              className="edu-card"
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="edu-period">
                <FiBookOpen
                  size={14}
                  style={{ marginRight: 6, verticalAlign: "middle" }}
                />
                {edu.period}
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              {edu.description && <p className="edu-desc">{edu.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
