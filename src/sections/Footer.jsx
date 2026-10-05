import { SiReact } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";

/**
 * Footer with "Built with React" credit and quick scroll-to-top button.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <p className="footer-text" style={{ margin: 0 }}>
          Built with <span className="footer-heart">♥</span> using{" "}
          <SiReact
            size={15}
            color="#61DAFB"
            style={{ verticalAlign: "middle", margin: "0 4px" }}
          />
          <strong>React</strong>, Tailwind CSS & Framer Motion · {new Date().getFullYear()} Ateeb Hussain
        </p>

        <button
          onClick={scrollToTop}
          className="contact-btn"
          style={{
            padding: "8px 16px",
            borderRadius: 30,
            fontSize: "0.8rem",
            width: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
          aria-label="Back to top"
        >
          <span>Top</span>
          <FiArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
