import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright">
            &copy; {currentYear} <span className="footer-name">Tejas Patel</span>. 
            All rights reserved.
          </p>
        </div>

        <div className="footer-center">
           <p className="made-with">
             Made with <FaHeart className="heart-icon" /> by Tejas Patel
           </p>
        </div>
      </div>
    </footer>
  );
}