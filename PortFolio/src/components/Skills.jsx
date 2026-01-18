import './Skills.css';
import { 
  SiCplusplus, SiTypescript, SiMysql, SiPrisma, SiC, SiExpress, 
  SiPostgresql, SiRedis, SiOpenai, SiGit, SiVitest, SiVite, 
  SiRedux, SiJsonwebtokens, SiPostman, SiVercel, SiRender 
} from "react-icons/si";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, 
  FaGithub, FaPython, FaLock, FaServer, FaDocker, FaDatabase 
} from "react-icons/fa";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            description: "Building interactive, responsive, and user-centric interfaces.",
            skills: [
                { icon: <FaReact />, name: "React" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiVite />, name: "Vite" },
                { icon: <SiRedux />, name: "Redux Toolkit" },
                { icon: <SiVitest />, name: "Vitest" },
                { icon: <FaJsSquare />, name: "JavaScript" },
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
            ]
        },
        {
            title: "Backend & Databases",
            description: "Architecting scalable server-side systems and efficient data schemas.",
            skills: [
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiExpress />, name: "Express" },
                { icon: <FaServer />, name: "REST APIs" },
                { icon: <SiJsonwebtokens />, name: "JWT Auth" },
                { icon: <FaLock />, name: "Auth / OAuth" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiRedis />, name: "Redis" },
                { icon: <SiPrisma />, name: "Prisma" },
                { icon: <SiPostman />, name: "Postman" },
            ]
        },
        {
            title: "Core & Modern Tools",
            description: "Foundational programming, deployment, and AI integration.",
            skills: [
                { icon: <SiCplusplus />, name: "C++" },
                { icon: <FaPython />, name: "Python" },
                { icon: <SiC />, name: "C" },
                { icon: <FaDatabase />, name: "SQL" },
                { icon: <SiGit />, name: "Git" },
                { icon: <FaGithub />, name: "GitHub" },
                { icon: <FaDocker />, name: "Docker" },
                { icon: <SiVercel />, name: "Vercel" },
                { icon: <SiRender />, name: "Render" },
                { icon: <SiOpenai />, name: "Gen-AI" },
            ]
        }
    ];

    return (
        <section id='skills' className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <span className="skills-badge">Capabilities</span>
                    <h1 className="skills-title">TECHNICAL <span className="outline-text">ARSENAL</span></h1>
                    <div className="header-line"></div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="skill-category-card">
                            <div className="card-header">
                                <h3>{cat.title}</h3>
                                <p className="category-desc">{cat.description}</p>
                            </div>
                            <div className="icons-flex">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-item">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}