import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Project.css'; // We'll write CSS below
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';


gsap.registerPlugin(ScrollTrigger);

const Project = () => {

  useEffect(() => {
    gsap.utils.toArray('.project-details').forEach(card => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 0%",
          end: "bottom 0%",
          scrub: true
        }
      })
    })
  })
  return (
    <div id='projects' className="project-intro">
      <h1 className="project-heading">
        Projects That Make Impact
      </h1>
      <p className="project-subtext">
        Explore a collection of my work — real-world solutions crafted with passion, purpose, and the latest tech.
      </p>
      <div className="project-showcase">
        <div className="project-details">
          <h2 className="project-title">FutureForge</h2>
          <p className="project-desc">
            A comprehensive platform providing detailed information on competitive exams, IT & private job opportunities, and curated study resources — all in one place with personalized bookmarking.
          </p>
          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend :</strong> React.js with custom CSS (no Tailwind)</li>
              <li><strong>Backend :</strong> Node.js, Express.js</li>
              <li><strong>Database :</strong> MySQL with Prisma ORM</li>
              <li><strong>Authentication :</strong> JWT (JSON Web Tokens), Bcrypt for secure login</li>
              <li><strong>Features :</strong> Exam details & all resources for that Exam, Various job listings (IT & private sector), etc.</li>
              <li><strong>Deployment :</strong> Vercel (Frontend), Render (Backend)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Helps aspirants explore competitive exams in detail, track and bookmark study materials, and discover both IT and private job openings — empowering users to prepare smartly and stay organized on their career journey.
            </p>
          </div>
          <ul className="project-links">
            <li>
              <a
                href="https://github.com/yourusername/InstaConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <FaGithub style={{ marginRight: "8px" }} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instaconnect.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button">
                <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                Live Demo
              </a>
            </li>
          </ul>
        </div>
        <div className="project-details">
          <h2 className="project-title">InstaConnect</h2>
          <p className="project-desc">
            A clean, real-time chat app built for fast, secure, and focused communication — without the clutter of ads or statuses. InstaConnect offers smooth messaging, private groups, and video calls for users who just want to talk.
          </p>
          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend :</strong> React.js with custom CSS</li>
              <li><strong>Real-time Communication :</strong> Socket.io for bi-directional messaging and presence</li>
              <li><strong>Video Calling :</strong> WebRTC integrated with Socket.io signaling</li>
              <li><strong>Backend :</strong> Node.js with Express.js</li>
              <li><strong>Database :</strong> MySQL</li>
              <li><strong>Authentication :</strong> JWT, Bcrypt for encrypted passwords</li>
              <li><strong>Security :</strong> Chat Lock with PIN or biometric simulation (localStorage-based)</li>
              <li><strong>Features :</strong>
                One-to-one chat, group messaging, online/offline status, typing indicator, chat history,
                message timestamps, media sharing, chat lock, and private video calls
              </li>
              <li><strong>Notifications :</strong> Real-time custom toast alerts</li>
              <li><strong>Deployment :</strong> Vercel (Frontend), Render/Railway (Backend), MongoDB Atlas</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              While most chat apps are overloaded with stories, ads, and distractions, InstaConnect keeps it simple — offering fast messaging, secure group chats, video calls, and chat lock. Built for people who just want to talk.
            </p>
            <ul className="project-links">
              <li>
                <a
                  href="https://github.com/yourusername/InstaConnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <FaGithub style={{ marginRight: "8px" }} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instaconnect.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                  Live Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-details">
          <h2 className="project-title">Body+Brain AI</h2>
          <p className="project-desc">
            An intelligent wellness assistant that connects physical health with mental performance. Body+Brain AI tracks your fitness, sleep, and habits while providing brain training games and stress-relief tools — all in one smart dashboard.
          </p>
          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend :</strong> React.js with Tailwind CSS</li>
              <li><strong>AI & Brain Training :</strong> TensorFlow.js, custom ML models</li>
              <li><strong>Health Tracking :</strong> Wearable integration (Google Fit API / Apple HealthKit)</li>
              <li><strong>Backend :</strong> Node.js with Express.js</li>
              <li><strong>Database :</strong> MongoDB Atlas</li>
              <li><strong>Authentication :</strong> JWT + Google OAuth</li>
              <li><strong>Features :</strong>
                Daily health summary, guided meditation, memory games, stress checker,
                sleep tracker, mental score dashboard, habit reminders
              </li>
              <li><strong>Notifications :</strong> Smart reminders & health alerts</li>
              <li><strong>Deployment :</strong> Vercel (Frontend), Render (Backend)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              People often track fitness and mental wellness separately. Body+Brain AI unifies both —
              providing a personalized experience that improves health, focus, and mental clarity using data and AI.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a
                href="https://github.com/yourusername/BodyBrain-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <FaGithub style={{ marginRight: "8px" }} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://bodybrain.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                Live Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
