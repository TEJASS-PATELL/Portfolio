import React from 'react';
import './Achievements.css';
import { FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
    {
        title: 'Google Cloud Certification',
        date: 'March 2024',
        description: 'Completed Google Cloud Associate Cloud Engineer certification.',
        link: 'https://cloud.google.com/certification/cloud-engineer'
    },
    {
        title: 'Hackathon Winner - CodeFest',
        date: 'Nov 2023',
        description: 'Won 1st place in a national-level hackathon with a team of 4.',
        link: 'https://example.com/codefest-2023'
    },
    {
        title: 'Top Performer - Intern at XYZ Corp',
        date: 'July 2023',
        description: 'Recognized as top intern for delivering AI-enhanced chatbot module.',
        link: 'https://www.geeksforgeeks.org/user/tejasspatell/'
    },
    {
        title: 'LeetCode 300+ Problems Solved',
        date: 'Ongoing',
        description: 'Consistent problem-solving with focus on DSA & System Design.',
        link: 'https://leetcode.com/u/TejasPatell/'
    },
];

const Achievements = () => {
    return (
        <div className="timeline-container">
            <h1 className="timeline-heading">Achievements</h1>
            <p className="timeline-subheading">
                A collection of milestones and recognitions that reflect my dedication, learning, and growth in the tech journey.
            </p>

            <div className="timeline">
                {achievements.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-content">
                            <h2>{item.title}</h2>
                            <p className="timeline-date">{item.date}</p>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Visit <FaExternalLinkAlt size={12} style={{ marginLeft: "5px" }} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
