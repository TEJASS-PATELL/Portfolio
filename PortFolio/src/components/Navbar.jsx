import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">

      <div className="nav-main">
        <div className="nav-logo">
          TP<span className="logo-dot">.</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Milestones</a></li>
          <li><a href="#contact" className="nav-cta">Let's Talk</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;