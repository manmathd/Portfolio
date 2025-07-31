import React from 'react';
import '../styles/Certificates.css';

const certificates = [
  {
    title: 'Problem Solving Basic Certificate',
    file: '/problem_solving_basic certificate.pdf',
  },
  {
    title: 'Python Certificate',
    file: '/python certificate.pdf',
  },
  {
    title: 'JavaScript Certificate',
    file: '/javascript certificate.pdf'
  }
];

function Certificates() {
  return (
    <div className="certificates-page">
      <h1 className="section-title">My Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="certificate-title">{cert.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Certificates;