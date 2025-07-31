import React, { useState } from 'react'
import "../styles/Portfolio.css"

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
  id: 7,
  title: "Portfolio Website",
  description: "My personal portfolio website showcasing my skills, projects, and certifications.",
  image: "https://via.placeholder.com/400x250/64ffda/0a192f?text=Portfolio",
  technologies: ["HTML", "CSS"],
  category: "frontend",
  liveUrl: "", // Add if hosted
  githubUrl: "https://github.com/manmathd/manmath-portfolio"
},
{
  id: 8,
  title: "LinkedIn Profile Analyzer (Mock)",
  description: "A mock tool that takes LinkedIn data inputs and returns profile score and improvement suggestions.",
  image: "https://via.placeholder.com/400x250/64ffda/0a192f?text=LinkedIn+Analyzer",
  technologies: ["HTML", "CSS", "JavaScript"],
  category: "frontend",
  liveUrl: "", // Add if hosted
  githubUrl: "https://github.com/manmathd/linkedin-profile-analyzer"
}

  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="page-container">
      <div className="section">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">
          Here are some of the projects I've worked on. Each project represents a unique 
          challenge and showcases different aspects of my development skills.
        </p>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio