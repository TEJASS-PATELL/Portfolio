import './About.css';

const About = () => {
    return (
        <section id='about' className="about-section">
            <div className="about-wrapper">
                <div className="about-header">
                    <span className="section-subtitle">Discovery</span>
                    <h2 className="about-title">
                        Engineered for 
                        <span className="outline-text"> Performance.</span>
                    </h2>
                    <div className="title-line"></div>
                </div>

                <div className="about-body">
                    <div className="about-text-block">
                        <p className="primary-para">
                            I'm a <span className="accent-text">Developer</span> focused on solving real-world problems through clean architecture and user-first design. 
                            I build scalable, practical solutions with purpose and precision.
                        </p>
                    </div>

                    <div className="about-text-block secondary-block">
                        <p className="secondary-para">
                            With a strong foundation in <span className="accent-text semi-bold">C++ and Data structures</span>, I approach development with a performance-first mindset. 
                            From full-stack applications to algorithmic problem-solving, I craft digital experiences that are practical, scalable, and built to last.
                        </p>
                    </div>

                    <div className="signature-area">
                        <h4 className="signature-text">
                            <span className="dash">—</span> Tejas Patel
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;