import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elem = sectionRef.current;
        if (!elem) return;

        gsap.fromTo(
            elem,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div id='about' className="about-container" ref={sectionRef}>
            <div className="about-content">
                <h1>Who I Am</h1>
                <p>
                    I'm a <span> Developer </span> focused on solving real-world problems through clean architecture and user-first design.
                    I build scalable, practical solutions with purpose and precision.
                </p>
                <p>
                    With a strong foundation in <span>C++ and Data structures</span> I approach development with a performance-first mindset.
                    From full-stack applications to algorithmic problem-solving, I craft digital experiences that are practical, scalable, and built to last.
                </p>

                <h4 className="name-hover">
                    <span className="text-slide">~ Tejas Patel</span>
                </h4>
            </div>
        </div>
    );
};

export default About;
