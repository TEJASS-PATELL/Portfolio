import './Project.css';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "All-in-One Study Hub",
    description: "A unified learning and career guidance platform designed to help students explore exams and job opportunities in one streamlined dashboard.",
    tech: ["React.js", "Node.js", "MySQL", "Prisma", "JWT", "Express", "Redis", "CSS", "NodeMailer"],
    problem: "Fragmented information across multiple student portals.",
    github: "https://github.com/TEJASS-PATELL/All_in_one_study_hub.git",
    live: "https://all-in-one-study-hub.vercel.app"
  },
  {
    title: "ChatLock",
    description: "Secure real-time chat application focused on privacy with PIN-protected chats and end-to-end style encryption.",
    tech: ["Socket.io", "React.js", "Node.js", "Prisma", "PostgreSQL", "Bcrypt"],
    problem: "Privacy concerns and bloatware in modern messaging apps.",
    github: "https://github.com/TEJASS-PATELL/Full_Stack_Chat_application.git",
    live: "https://full-stack-chat-application-seven.vercel.app"
  },
  {
    title: "Body+Brain AI",
    description: "Intelligent wellness assistant bridging physical health and mental performance using AI-powered insights.",
    tech: ["Gemini API", "TypeScript", "CSS", "Node.js"],
    problem: "Lack of personalized synergy between fitness and mental health.",
    github: "https://github.com/TEJASS-PATELL/Brain-Body-ai.git",
    live: "https://brain-body-ai.vercel.app"
  },
  {
    title: "Scalable Starter App",
    description: "Production-ready starter application with Auth, Stripe, and Cloudinary to jumpstart SaaS development.",
    tech: ["React 18", "Stripe", "Cloudinary", "OTP Auth", "Prisma"],
    problem: "Repetitive overhead of setting up core SaaS modules.",
    github: "https://github.com/TEJASS-PATELL/dev-starter-template",
    live: "#"
  }
];

const Project = () => {
  return (
    <section id='projects' className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-badge">Portfolio</span>
          <h1 className="projects-title">Featured <span className="outline-text">Work</span></h1>
          <p className="projects-subtitle">
            A selection of my recent technical projects, built with scalability and user experience in mind.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <span className="project-number">0{index + 1}</span>
              <div className="project-content">
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-problem">
                  <span className="problem-label">Challenge -</span> {project.problem}
                </div>

                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FaGithub /> Source
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;