import { useRef } from 'react';
import './Hero.css';
import { BsArrowRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import Navbar from './Navbar';

export default function Hero() {

  return (
    <div className="main-container">
      <div className="main-page">
        <Navbar />
        <div className="architect-hero">
          <div className="left-div">
            <h1 className="main-title">Tejas Patel</h1>
            <p className="subtitle">
              Passionate Full-Stack Developer — turning ideas into scalable web experiences.
            </p>
            <div className="button-group">
              <a
                href="/resume.pdf"
                className="btn primary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload style={{ marginRight: "8px" }} /> Resume
              </a>

              <HiArrowLongRight style={{ marginLeft: "60px", fontSize: "40px" }} />

              <div className='contact-icon'>
                <a
                  href="https://www.linkedin.com/in/tejasspatell"
                  className="btn icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/TEJASS-PATELL"
                  className="btn icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a href="mailto:tejasspatell2@gmail.com"  className="btn icon-btn" aria-label="Email">
                  <FaEnvelope size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
