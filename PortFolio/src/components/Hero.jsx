import { useRef } from 'react';
import './Hero.css';
import { FaDownload } from "react-icons/fa";
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
              <a href="/resume.pdf" className="btn primary-btn" target="_blank" rel="noopener noreferrer">
              <FaDownload style={{ marginRight: "8px" }} />Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
