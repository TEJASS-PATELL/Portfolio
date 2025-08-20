import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import Navbar from './Navbar';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".top-line", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        delay: .8,
        duration: 1.4,
        ease: "power3.out",
      })
        .from(".main-title", {
          opacity: 0,
          y: 60,
          scale: 1.1,
          duration: 1.4,
          ease: "power4.out",
        }, "-=0.6") // overlaps with top-line

        .from(".bottom-line", {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1.5,
          ease: "power3.out",
        }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-container">
      <div className="main-page">
        <Navbar />
        <div ref={containerRef} className="architect-hero">
          <div className="hero-content">
            <h4 className="top-line">VERSATILE FULL STACK DEVELOPER & CREATIVE PROBLEM SOLVER</h4>
            <h1 className="main-title">TEJAS-PATEL</h1>
            <h4 className="bottom-line">BUILDING FUTURE-READY DIGITAL EXPERIENCES THAT SCALE</h4>
          </div>
        </div>
      </div>
      <div className="down-arrow">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="4" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="black" strokeWidth="2" fill="none" strokeDasharray="10 5" />
          <circle cx="100" cy="100" r="50" fill="black" />
        </svg>
      </div>
    </div>
  );
}
