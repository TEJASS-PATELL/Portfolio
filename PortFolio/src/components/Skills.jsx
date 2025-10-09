import React, { useEffect, useRef } from 'react';
import './Skills.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SiCplusplus, SiTypescript, SiMysql, SiPrisma, SiC, SiGraphql, SiExpress, SiFirebase, SiPostman, SiOpenai, SiApachekafka } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGithub, FaPython, FaDocker, FaServer } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const iconRef = useRef(null);
    useEffect(() => {
        const icons = gsap.utils.toArray('.float-icon');

        gsap.fromTo(icons, {
            opacity: 0,
            y: 50,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: iconRef.current,
                start: "top 85%",
            }
        });
    }, []);

    return (
        <div id='skills' className="skill-page">
            <h1 className="skill-title">Crafted Skills & Tools</h1>
            <p className="skill-details">
                A journey through my technical stack — blending creativity with performance.
            </p>
            <div className='skill-container' ref={iconRef}>
                <div className="technology-icon">
                    <div className="float-icon icon1"><FaReact size={80} /><span className="tooltip">React</span></div>
                    <div className="float-icon icon2"><FaHtml5 size={80} /><span className="tooltip">HTML5</span></div>
                    <div className="float-icon icon3"><FaCss3Alt size={80} /><span className="tooltip">CSS3</span></div>
                    <div className="float-icon icon4"><FaJsSquare size={80} /><span className="tooltip">JavaScript</span></div>
                    <div className="float-icon icon5"><FaNodeJs size={80} /><span className="tooltip">Node.js</span></div>
                    <div className="float-icon icon6"><FaDocker size={80} /><span className="tooltip">Docker</span></div>
                    <div className="float-icon icon8"><FaServer size={80} /><span className="tooltip">REST API</span></div> 
                    <div className="float-icon icon7"><SiCplusplus size={80} /><span className="tooltip">C++</span></div>
                    <div className="float-icon icon9"><SiTypescript size={80} /><span className="tooltip">TypeScript</span></div>
                    <div className="float-icon icon10"><FaGithub size={80} /><span className="tooltip">GitHub</span></div>
                    <div className="float-icon icon11"><SiMysql size={80} /><span className="tooltip">MySQL</span></div>
                    <div className="float-icon icon13"><SiExpress size={80} /><span className="tooltip">Express</span></div>
                    <div className="float-icon icon14"><SiFirebase size={80} /><span className="tooltip">Firebase</span></div>
                     <div className="float-icon icon12"><SiOpenai size={80} /><span className="tooltip">Generative AI</span></div>
                    <div className="float-icon icon18"><SiPrisma size={80} /><span className="tooltip">Prisma</span></div>
                    <div className="float-icon icon19"><FaPython size={80} /><span className="tooltip">Python</span></div>
                    <div className="float-icon icon20"><SiPostman size={80} /><span className="tooltip">Postman</span></div>
                    <div className="float-icon icon21"><SiC size={80} /><span className="tooltip">C</span></div>
                    <div className="float-icon icon22"><SiGraphql size={80} /><span className="tooltip">GraphQL</span></div>
                    <div className="float-icon icon15"> <SiApachekafka size={80} /> <span className="tooltip">Apache Kafka</span></div>
                </div>

            </div>
        </div>
    );
}
