import React from 'react'
import "../styles/About.css"
import profileImg from '../assets/profile.jpg'
import { FaUser, FaLightbulb, FaCode, FaStar, FaHeart, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <div className="page-container">
      <div className="section">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Get to know me better - my journey, passion, and what drives me in the world of technology.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="card">
              <div className="about-card-icon"><FaUser /></div>
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with a deep love for creating 
                exceptional digital experiences. My journey in technology began with 
                curiosity and has evolved into a career focused on building innovative 
                solutions that make a difference.
              </p>
            </div>
            <div className="card">
              <div className="about-card-icon"><FaLightbulb /></div>
              <h3>My Approach</h3>
              <p>
                I believe in writing clean, maintainable code and creating user-centric 
                designs. Every project I work on is an opportunity to learn, grow, and 
                push the boundaries of what's possible in web development.
              </p>
            </div>
            <div className="card">
              <div className="about-card-icon"><FaCode /></div>
              <h3>What I Do</h3>
              <p>
                I specialize in modern web technologies including React, Node.js, and 
                various cloud platforms. From concept to deployment, I handle every 
                aspect of the development process to deliver high-quality solutions.
              </p>
            </div>
            <div className="about-tags">
              <h3>Traits & Values</h3>
              <div className="tags-cloud">
                <span className="about-tag"><FaStar /> Creative</span>
                <span className="about-tag"><FaHeart /> Passionate</span>
                <span className="about-tag"><FaRocket /> Ambitious</span>
                <span className="about-tag">Team Player</span>
                <span className="about-tag">Problem Solver</span>
                <span className="about-tag">Lifelong Learner</span>
                <span className="about-tag">Adaptable</span>
                <span className="about-tag">Detail-Oriented</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card glass-card">
                <div className="stat-icon"><FaRocket /></div>
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon"><FaCode /></div>
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon"><FaHeart /></div>
                <div className="stat-number">20+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card glass-card">
                <div className="stat-icon"><FaLightbulb /></div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          <div className="about-profile">
            <div className="profile-container circle-profile">
              <img src={profileImg} alt="Manmath - Full Stack Developer" className="profile-img" />
              <div className="profile-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About