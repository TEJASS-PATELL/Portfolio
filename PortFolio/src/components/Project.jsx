import './Project.css';

const Project = () => {
  return (
    <div id='projects' className="project-intro">
      <h1 className="project-heading">
        Projects That Make Impact
      </h1>
      <p className="project-subtext">
        Discover my projects—crafted with purpose and powered by the latest tech.
      </p>

      <div className="projects-container">
        <a href="https://full-stack-chat-application-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="project-box">
          <img src="/project1.png" alt="FutureForge" />
          <div className="overlay">
            <h3>FutureForge</h3>
            <p>Explore exams & jobs</p>
          </div>
        </a>

        <a href="https://brain-body-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="project-box">
          <img src="/project2.png" alt="ChatLock" />
          <div className="overlay">
            <h3>ChatLock</h3>
            <p>Real-time Secure Chat</p>
          </div>
        </a>

        <a href="https://brain-body-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="project-box">
          <img src="/project3.png" alt="Body+Brain AI" />
          <div className="overlay">
            <h3>Body+Brain AI</h3>
            <p>AI Wellness Assistant</p>
          </div>
        </a>

        <a href="https://github.com/yourusername/yourproject" target="_blank" rel="noopener noreferrer" className="project-box">
          <img src="/images/extra.png" alt="Next Project" />
          <div className="overlay">
            <h3>Next Project</h3>
            <p>Coming Soon...</p>
          </div>
        </a>
      </div>


    </div>
  );
};

export default Project;
