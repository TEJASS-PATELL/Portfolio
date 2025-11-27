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
          <h2 className="project-title">All-in-One Study Hub</h2>
          <p className="project-desc">
            A unified learning and career guidance platform designed to help students and job-seekers explore competitive exams, access high-quality study material, and stay updated with IT and private sector job opportunities — all in one streamlined dashboard with personalized bookmarking.
          </p>

          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend:</strong> React.js with custom CSS for a responsive and intuitive UI</li>
              <li><strong>Backend:</strong> Node.js and Express.js for scalable and modular API development</li>
              <li><strong>Database:</strong> MySQL powered by Prisma ORM for efficient and type-safe data operations</li>
              <li><strong>Authentication:</strong> Secure login system using JWT and Bcrypt for password hashing</li>
              <li className="features">
                <strong>Features: </strong>
                In-depth exam information, structured study resources, IT & private job listings,
                smart bookmarking, search & filtering, AI-generated exam roadmaps, a dedicated AI tools
                page, AI chatbot assistance, experience-sharing section, and a community chatroom
                (coming soon) — all wrapped in a clean, user-focused experience.
              </li>
              <li><strong>Deployment:</strong> Vercel (Frontend) and Render (Backend) ensuring fast performance and zero-downtime hosting</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Students and job aspirants often struggle to find reliable exam details, study materials, and job openings at one place.
              This platform eliminates that problem by combining all essential resources into a single interface — helping users browse exams, mark important study content, track career opportunities, and stay organized throughout their preparation journey.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a
                href="https://github.com/TEJASS-PATELL/All_in_one_study_hub.git"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <FaGithub style={{ marginRight: '8px' }} /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instaconnect.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link-button"
              >
                <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live Demo
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
              <li className='features'><strong>Features:</strong> One-to-one chat, presence, typing indicator, chat history, media sharing, notifications, and privacy lock</li>
              <li><strong>Deployment:</strong> Vercel (Frontend), Render/Railway (Backend), Railway (MySQL)</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Most chat applications today are bloated with unnecessary features like ads and statuses. ChatLock offers a lightweight yet secure messaging platform — built for people who value <strong>speed, privacy, and simplicity</strong>. With chat lock and PIN protection, users can keep their conversations safe while enjoying a smooth, clutter-free experience.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a href="https://github.com/TEJASS-PATELL/Full_Stack_Chat_application.git" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </a>
            </li>
            <li>
              <a href="https://full-stack-chat-application-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="link-button">
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
              <li className='features'><strong>Features:</strong> Voice coaching, multilingual support, habit tracking, meditation, session history</li>
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
        <div className="project-details">
          <h2 className="project-title">Scalable Starter App</h2>
          <p className="project-desc">
            A full-stack, production-ready starter application designed to help developers skip repetitive setup and focus on building actual features. Includes authentication, Stripe payments, profile management, chatbot, and a fully responsive frontend — all built with scalability in mind.
          </p>

          <div className="project-meta">
            <h4>Technologies Used</h4>
            <ul>
              <li><strong>Frontend:</strong> React 18, CSS</li>
              <li><strong>Backend:</strong> Node.js with Express.js</li>
              <li><strong>Database & ORM:</strong> MySQL + Prisma</li>
              <li><strong>Authentication:</strong> JWT, OTP, Google & GitHub OAuth</li>
              <li><strong>Payments:</strong> Stripe integration for premium access</li>
              <li><strong>File Uploads:</strong> Cloudinary for profile images</li>
              <li><strong>Chatbot:</strong> In-built AI chatbot integration</li>
              <li><strong>Security:</strong> Helmet.js, bcrypt, Joi, Rate Limiting</li>
              <li className='features'><strong>Features:</strong> Signup/Login with OTP, Forgot Password, Premium access, Profile upload, Responsive frontend, Chatbot</li>
            </ul>

            <h4>Problem Solved</h4>
            <p>
              Developers often waste time setting up authentication, payment integration, and other core modules. This starter app provides a ready-to-use, scalable foundation so anyone can launch a SaaS, dashboard, or MVP quickly by just updating content and environment variables.
            </p>
          </div>

          <ul className="project-links">
            <li>
              <a href="https://github.com/TEJASS-PATELL/skeleton_application" target="_blank" rel="noopener noreferrer" className="link-button">
                <FaGithub style={{ marginRight: "8px" }} /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
