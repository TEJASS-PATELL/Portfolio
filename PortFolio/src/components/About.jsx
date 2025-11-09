import './About.css';

const About = () => {
    return (
        <div id='about' className="about-container">
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
                    <span className="textt-slide">~ Tejas Patel</span>
                </h4>
            </div>
        </div>
    );
};

export default About;
