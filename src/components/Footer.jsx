import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Manmath Dummanwar. All rights reserved.</p>
      <p className="footer-icons">
        <a href="https://www.linkedin.com/in/dummanwar-manmath-074625331" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        {' | '}
        <a href="https://github.com/manmathdummanwar" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        {' | '}
        <a href="mailto:manmathpatel903@example.com">
          <FaEnvelope /> Email
        </a>
      </p>
    </footer>
  );
}

export default Footer;
