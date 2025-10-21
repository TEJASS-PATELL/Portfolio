import './Project.css';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div id='projects' className="project-intro">
      <h1 className="project-heading">
        Projects That Make Impact
      </h1>
      <p className="project-subtext">
        Discover my projects—crafted with purpose and powered by the latest tech.
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
              <li><strong>Frontend:</strong> React.js with custom CSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MySQL with Prisma ORM</li>
              <li><strong>Authentication:</strong> JWT (JSON Web Tokens), Bcrypt for secure login</li>
              <li><strong>Features:</strong> Exam details & all resources for that exam, job listings (IT & private sector), etc.</li>
              <li><strong>Deployment:</strong> Vercel (Frontend), Render (Backend)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Helps aspirants explore competitive exams in detail, track and bookmark study materials, and discover both IT and private job openings — empowering users to prepare smartly and stay organized on their career journey.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a href="https://github.com/yourusername/InstaConnect" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </a>
            </li>
            <li>
              <a href="https://instaconnect.vercel.app" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaExternalLinkAlt style={{ marginRight: "8px" }} /> Live Demo
              </a>
            </li>
          </ul>
        </div>

        <div className="project-details">
          <h2 className="project-title">ChatLock</h2>
          <p className="project-desc">
            ChatLock is a clean and secure real-time chat application designed for fast, private, and distraction-free communication. Unlike traditional chat apps filled with ads, statuses, and clutter, ChatLock focuses purely on messaging — with built-in privacy features like PIN-protected chats and end-to-end style encryption.
          </p>

          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend:</strong> React.js with custom CSS</li>
              <li><strong>Real-time Communication:</strong> Socket.io for bi-directional messaging, presence & typing indicators</li>
              <li><strong>Backend:</strong> Node.js with Express.js</li>
              <li><strong>Database:</strong> MySQL with Prisma ORM</li>
              <li><strong>Authentication:</strong> JWT with Bcrypt for secure password hashing</li>
              <li><strong>Security:</strong> Chat Lock with custom PIN-based access</li>
              <li><strong>Features:</strong> One-to-one chat, presence, typing indicator, chat history, media sharing, notifications, and privacy lock</li>
              <li><strong>Deployment:</strong> Vercel (Frontend), Render/Railway (Backend), Railway (MySQL)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Most chat applications today are bloated with unnecessary features like ads and statuses. ChatLock offers a lightweight yet secure messaging platform — built for people who value <strong>speed, privacy, and simplicity</strong>. With chat lock and PIN protection, users can keep their conversations safe while enjoying a smooth, clutter-free experience.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a href="https://github.com/yourusername/ChatLock" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </a>
            </li>
            <li>
              <a href="https://chatlock.vercel.app" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaExternalLinkAlt style={{ marginRight: "8px" }} /> Live Demo
              </a>
            </li>
          </ul>
        </div>

        <div className="project-details">
          <h2 className="project-title">Body+Brain AI</h2>
          <p className="project-desc">
            Body+Brain AI is an intelligent wellness assistant that bridges the gap between <strong>physical health</strong> and <strong>mental performance</strong>. It tracks fitness, sleep, and habits while offering guided meditation, yoga sessions, brain-training activities, and stress-relief tools — all combined into a <strong>personalized AI-powered dashboard</strong>.
          </p>

          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend:</strong> React 18 + TypeScript with Tailwind CSS</li>
              <li><strong>AI Integration:</strong> Gemini API for wellness recommendations</li>
              <li><strong>Health & Fitness Tracking:</strong> BMI calculator, yoga & meditation, habit challenges</li>
              <li><strong>Backend:</strong> Node.js with Express.js (REST APIs)</li>
              <li><strong>Database:</strong> MySQL</li>
              <li><strong>Authentication:</strong> JWT (cookies) + Passport.js (Google Login)</li>
              <li><strong>Features:</strong> Voice coaching, multilingual support, habit tracking, meditation, session history</li>
              <li><strong>Security:</strong> Helmet.js, bcrypt, Joi, Rate Limiting</li>
              <li><strong>Deployment:</strong> Vercel (Frontend), Render/Railway (Backend), Railway (MySQL)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              In today’s fast-paced world, people struggle to maintain both fitness and mental wellness. Body+Brain AI acts as a personal AI trainer — guiding users through workouts, meditation, and habit tracking to stay consistent, focused, and healthier every day.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a href="https://github.com/TEJASS-PATELL/Brain-Body-ai.git" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </a>
            </li>
            <li>
              <a href="https://brain-body-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaExternalLinkAlt style={{ marginRight: "8px" }} /> Live Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
