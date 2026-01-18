import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from './Navbar';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <Navbar />

      <div className="hero-container">
        <div className="hero-content">
          <span className="main-section-badge">Open for work</span>

          <h1 className="hero-title">
            TEJAS<span className="outline-text"> PATEL</span>
          </h1>

          <p className="hero-description">
            Full-Stack Developer focused on building <span className="highlight-white">robust systems</span> and
            digital experiences that bridge the gap between design and performance.
          </p>

          <div className="hero-cta-group">
            <a
              href="./TejasPatell.pdf"
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Resume <FaDownload className="btn-icon" />
            </a>

            <div className="social-strip">
              <a href="https://www.linkedin.com/in/tejasspatell" target="_blank" rel="noopener noreferrer" className="social-item" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/TEJASS-PATELL" target="_blank" rel="noopener noreferrer" className="social-item" title="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasspatell2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}