import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending');

        try {
            const response = await fetch("http://localhost:5002/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Something went wrong.");
        }
    };

    return (
        <div id='contact' className="contact-section">
            <div className="contact-container">
                <h2>Contact Me</h2>

                <p>
                    I’m passionate about solving <span>Real-world problems</span> through clean, efficient, and user-centric design.
                    With a strong focus on delivering practical solutions. If you're interested in working together, collaborating, or
                    <span> hiring someone who’s genuinely driven</span> — feel free to reach out. I’d love to hear from you!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', height: '150px', resize: 'none' }}
                        required
                    />

                    <button className="submit-btn" type="submit">
                        <span className="text-slide">Submit</span>
                        <span className="text-slide duplicate">Submit</span>
                    </button>
                    {status && <p style={{ marginTop: "10px", color: "white" }}>{status}</p>}
                    <div className="social-links">
                        <a
                            href="https://github.com/TEJASS-PATELL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={40} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tejasspatell"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={40} />
                        </a>

                        <a href="mailto:tejasspatell2@gmail.com" aria-label="Email">
                            <FaEnvelope size={40} />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
