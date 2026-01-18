import React from 'react';
import './Achievements.css';
import { FaExternalLinkAlt, FaAward, FaCertificate, FaCode, FaRocket } from "react-icons/fa";

const achievements = [
    {
        title: 'Google Cloud Certification',
        date: 'March 2024',
        description: 'Completed Google Cloud Associate Cloud Engineer certification.',
        link: 'https://cloud.google.com/certification/cloud-engineer',
        icon: <FaCertificate />
    },
    {
        title: 'Hackathon Winner - CodeFest',
        date: 'Nov 2023',
        description: 'Won 1st place in a national-level hackathon with a team of 4.',
        link: 'https://example.com/codefest-2023',
        icon: <FaAward />
    },
    {
        title: 'Top Performer - Intern',
        date: 'July 2023',
        description: 'Recognized as top intern for delivering AI-enhanced chatbot module.',
        link: 'https://www.geeksforgeeks.org/user/tejasspatell/',
        icon: <FaRocket />
    },
    {
        title: 'LeetCode 300+ Problems',
        date: 'Ongoing',
        description: 'Consistent problem-solving with focus on DSA & System Design.',
        link: 'https://leetcode.com/u/TejasPatell/',
        icon: <FaCode />
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="achievements-container">
                <div className="section-header">
                    <span className="section-badge">Timeline</span>
                    <h1 className="section-title">Career <span className="outline-text">Milestones</span></h1>
                    <p className="section-subtitles">
                        A chronological record of my professional growth and technical contributions.
                    </p>
                </div>

                <div className="timeline-wrapper">
                    <div className="center-line"></div>
                    
                    {achievements.map((item, index) => (
                        <div key={index} className="timeline-block">
                            <div className="marker-container">
                                <div className="marker">{item.icon}</div>
                            </div>
                            
                            <div className="timeline-content-box">
                                <div className="milestone-meta">
                                    <span className="milestone-date">{item.date}</span>
                                    <span className="milestone-index">0{index + 1}</span>
                                </div>
                                <h3 className="milestone-title">{item.title}</h3>
                                <p className="milestone-desc">{item.description}</p>
                                <a href={item.link} className="milestone-link" target="_blank" rel="noopener noreferrer">
                                    Verify <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;