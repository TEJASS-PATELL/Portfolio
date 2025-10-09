import { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const logoReff = useRef(null);
  const linksRef = useRef(null);

  return (
      <nav className="main-navbar">
        <div className="nav-logo" ref={logoReff}>Aspire: Software Engineer / Developer</div>
        <ul className="nav-links" ref={linksRef}>
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
