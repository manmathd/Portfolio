import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      if (!effectRef.current && window.VANTA) {
        effectRef.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0a192f,
          color: 0x64ffda,
          color2: 0x4cd6b3,
          size: 2.0,
          points: 20.0,
          maxDistance: 30.0,
          spacing: 25.0,
          showLines: true,
          lineColor: 0x64ffda,
          lineWidth: 1.0,
          lineOpacity: 0.3,
        });
      }
    };

    // Wait for VANTA to be available
    if (window.VANTA) {
      initVanta();
    } else {
      // If VANTA is not loaded yet, wait for it
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          clearInterval(checkVanta);
          initVanta();
        }
      }, 100);
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div className="home-container" ref={vantaRef}>
      <div className="home-content">
        <div className="text-section">
          <div className="greeting">Hi there, I'm</div>
          <h1 className="name">Manmath</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="description">
            I specialize in building exceptional digital experiences that combine 
            beautiful design with powerful functionality. Currently focused on 
            React, Node.js, and modern web technologies.
          </p>
          <div className="cta-buttons">
            <a href="/resume" className="btn btn-primary">View Resume</a>
            <a href="/portfolio" className="btn btn-secondary">View Work</a>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:manmath@example.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <div className="profile-container">
            <img src={profileImg} alt="Manmath - Full Stack Developer" className="profile-img" />
            <div className="profile-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
