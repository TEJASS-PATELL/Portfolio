import React, { useState } from 'react';
import './Contact.css';
import toast from 'react-hot-toast';

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
                toast.success("Message Sent Successfully");
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(err);
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
                    </button>
                </form>
            </div>
        </div>
    );
}
