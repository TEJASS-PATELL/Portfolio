import React, { useState } from 'react';
import './Contact.css';
import toast from 'react-hot-toast';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToast = toast.loading("Sending message...");
        try {
            const response = await fetch("http://localhost:5002/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            toast.dismiss(loadingToast);

            if (result.success) {
                toast.success("Message Sent Successfully");
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (error) {
            toast.dismiss(loadingToast);
            console.error("Error:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <section id='contact' className="contact-wrapper">
            <div className="contact-inner">
                <div className="contact-info">
                    <span className="contact-badge">Contact</span>
                    <h2 className="contact-title">
                        Let’s start a <br />
                        <span className="outline-text">Conversation</span>
                    </h2>
                    
                    <p className="contact-text">
                        I am currently open to <strong>Full-time opportunities</strong> and freelance projects. 
                        If you have a question or just want to say hi, my inbox is always open.
                    </p>
                    
                    <div className="contact-methods">
                        <div className="method-item">
                            <div className="method-icon"><FaEnvelope /></div>
                            <div className="method-details">
                                <h4>Email</h4>
                                <p>tejasspatell2@gmail.com</p>
                            </div>
                        </div>
                        <div className="method-item">
                            <div className="method-icon"><FaMapMarkerAlt /></div>
                            <div className="method-details">
                                <h4>Location</h4>
                                <p>Lucknow, India </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-container">
                    <form className="modern-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name -</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email -</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="yourname@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message -</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="premium-submit-btn" type="submit">
                            Send Request <FaPaperPlane className="send-icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}