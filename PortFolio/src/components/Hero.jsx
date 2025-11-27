import { useRef } from 'react';
import './Hero.css';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
                href="./Tejas-Patel.pdf"
                className="btn primary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload style={{ marginRight: "8px" }} /> Resume
              </a>

              <div className='contact-icon'>
                <a
                  href="https://www.linkedin.com/in/tejasspatell"
                  className="btn icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className='icon'/>
                </a>

                <a
                  href="https://github.com/TEJASS-PATELL"
                  className="btn icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className='icon'/>
                </a> 
                
                <a href="mailto:tejasspatell2@gmail.com"  className="btn icon-btn" aria-label="Email">
                  <FaEnvelope className='icon'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
