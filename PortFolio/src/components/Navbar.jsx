import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoReff = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (logoReff.current) {
      tl.fromTo(
        logoReff.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          onComplete: () => {
            // Remove inline styles after animation completes
            gsap.set(logoReff.current, { clearProps: "all" });
          }
        }
      );
    }

    if (linksRef.current) {
      const items = Array.from(linksRef.current.children);
      tl.fromTo(
        items,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: .5,
          stagger: 0.2,
          onComplete: () => {
            gsap.set(items, { clearProps: "all" });
          }
        }
      );
    }
  }, []);

  const handleToggle = () => setMenuOpen(prev => !prev);

  return (
    <>
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
    </>
  );
};

export default Navbar;
