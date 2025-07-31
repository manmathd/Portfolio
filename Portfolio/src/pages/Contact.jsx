import React, { useState } from 'react';
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-section glass-card">
        <h1 className="section-title">Get In Touch</h1>
        <p className="section-subtitle">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to connect!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <a href="mailto:manmathpatel903@gmail.com" className="contact-card glass-card" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p>manmathpatel903@gmail.com</p>
              <span className="contact-link">Send Email</span>
            </a>
            <a href="https://www.linkedin.com/in/dummanwar-manmath-074625331" className="contact-card glass-card" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon"><FaLinkedin /></div>
              <h3>LinkedIn</h3>
              <p>Connect with me on LinkedIn</p>
              <span className="contact-link">View Profile</span>
            </a>
            <a href="https://github.com" className="contact-card glass-card" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon"><FaGithub /></div>
              <h3>GitHub</h3>
              <p>Check out my projects</p>
              <span className="contact-link">View Projects</span>
            </a>
          </div>
          <div className="contact-form-container">
            <div className="contact-form-card glass-card">
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;