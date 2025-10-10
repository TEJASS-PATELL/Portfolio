import { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
      <nav className="main-navbar">
        <div className="nav-logo">Aspire: Software Developer</div>
        <ul className="nav-links">
          <li><a href="#"><i className="fas fa-house"></i> Home</a></li>
          <li><a href="#"><i className="fas fa-user"></i> About</a></li>
          <li><a href="#"><i className="fas fa-code"></i> Skills</a></li>
          <li><a href="#"><i className="fas fa-briefcase"></i> Projects</a></li>
          <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>
      </nav>
  );
};

export default Navbar;
