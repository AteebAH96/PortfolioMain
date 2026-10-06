import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useAnimations";
import { personalInfo, socialLinks } from "../data/data";
import {
  FiMail,
  FiPhone,
  FiCopy,
  FiCheck,
  FiSend,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/**
 * Contact section — email copy button, WhatsApp link, contact form (frontend-only),
 * and social links.
 */
export default function Contact() {
  const [ref, inView] = useInView(0.15);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: FaYoutube, href: socialLinks.youtube, label: "YouTube" },
  ].filter((s) => s.href && s.href.trim() !== "");

  return (
    <section id="contact" aria-label="Contact">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together — reach out anytime
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Contact info + socials */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Copy email */}
            <button className="contact-btn" onClick={copyEmail} aria-label="Copy email address">
              <span
                className="contact-btn-icon"
                style={{ background: "rgba(66,106,156,0.15)", color: "var(--accent-lavender)" }}
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </span>
              <span>
                <small style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>
                  Email
                </small>
                {personalInfo.email}
              </span>
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              aria-label="Chat on WhatsApp"
            >
              <span
                className="contact-btn-icon"
                style={{ background: "rgba(37,211,102,0.15)", color: "#25D366" }}
              >
                <FaWhatsapp />
              </span>
              <span>
                <small style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>
                  WhatsApp
                </small>
                {personalInfo.phone}
              </span>
            </a>

            {/* Phone */}
            <a href={`tel:${personalInfo.phone}`} className="contact-btn" aria-label="Call">
              <span
                className="contact-btn-icon"
                style={{ background: "rgba(66,106,156,0.15)", color: "var(--accent-pink)" }}
              >
                <FiPhone />
              </span>
              <span>
                <small style={{ color: "var(--text-muted)", display: "block", fontSize: "0.75rem" }}>
                  Phone
                </small>
                {personalInfo.phone}
              </span>
            </a>

            {/* Socials */}
            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.label}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                aria-label="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                aria-label="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                required
                aria-label="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="form-submit" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <button type="submit" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FiSend size={16} />
                Send Message
              </button>
              {submitted && (
                <span style={{ color: "var(--accent-lavender)", fontSize: "0.85rem", fontWeight: 600 }}>
                  ✓ Message sent successfully!
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      {/* Copy toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="copy-toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            ✓ Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
