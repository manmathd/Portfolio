import React from 'react';
import "../styles/Resume.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaGraduationCap, FaTools, FaProjectDiagram, FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <div className="resume-page glass-card">
      <div className="resume-header">
        <h1 className="resume-name">D. Manmath</h1>
        <div className="resume-location"><FaMapMarkerAlt /> Bichkunda, Telangana</div>
        <div className="resume-contact">
          <span><FaPhoneAlt /> +91 7095066636</span>
          <span><FaEnvelope /> manmathpatel903@gmail.com</span>
          <a href="https://your-portfolio-url.com" target="_blank" rel="noopener noreferrer"><FaGlobe /> Portfolio</a>
          <a href="https://www.linkedin.com/in/dummanwar-manmath-074625331" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
        <button className="resume-download"><FaDownload /> Download PDF</button>
      </div>

      <section>
        <h2 className="resume-section-title"><FaGraduationCap /> Objective</h2>
        <p className="resume-section-desc">
          A dedicated Computer Science Engineering graduate with a strong passion for designing, implementing, and securing software systems.
        </p>
      </section>

      <section>
        <h2 className="resume-section-title"><FaGraduationCap /> Education</h2>
        <ul className="resume-list">
          <li className="resume-badge"><strong>B.Tech - AI/ML</strong> <span className="badge">MRUH</span> <span className="badge">2024-2028</span> <span className="badge">CGPA: 8.73</span></li>
          <li className="resume-badge"><strong>Intermediate</strong> <span className="badge">Impulse Jr College</span> <span className="badge">2022-2024</span> <span className="badge">96%</span></li>
          <li className="resume-badge"><strong>SSC</strong> <span className="badge">Pragna High School</span> <span className="badge">2015-2022</span> <span className="badge">95%</span></li>
        </ul>
      </section>

      <section>
        <h2 className="resume-section-title"><FaTools /> Technical Skills</h2>
        <ul className="resume-list">
          <li><strong>Languages:</strong> C++, Python, HTML, CSS, JavaScript</li>
          <li><strong>Frameworks:</strong> React.js, Tailwind CSS</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
          <li><strong>Databases:</strong> MongoDB (Basics)</li>
        </ul>
      </section>

      <section>
        <h2 className="resume-section-title"><FaProjectDiagram /> Projects</h2>
        <ul className="resume-list">
          <li><strong>Online Clothing Store Website:</strong> Built a responsive e-commerce front-end using React, HTML, and CSS.</li>
          <li><strong>GitHub Profile Portfolio:</strong> Designed a personalized GitHub profile with projects, contact links, and visuals.</li>
          <li><strong>Portfolio Website:</strong> Created a personal portfolio using React.js and Tailwind CSS to showcase projects and skills.</li>
          <li><strong>LinkedIn Profile Analyzer:</strong> Concept project that analyzes LinkedIn profile strengths using JavaScript and React UI (under progress).</li>
          <li><strong>Profile Card Generator:</strong> Developed dynamic profile cards using React components and responsive CSS.</li>
          <li><strong>Employee Table App:</strong> Built an interactive employee management table with sorting and filtering features in React.</li>
          <li><strong>Coding Challenges:</strong> Solved algorithmic problems in Python and C++ (e.g., Max Cost Finder).</li>
          <li><strong>Java Console App:</strong> Made a cylinder volume calculator using Java fundamentals.</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
