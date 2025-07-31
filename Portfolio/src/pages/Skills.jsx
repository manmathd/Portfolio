import React from 'react'
import "../styles/Skills.css"

function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 75 },
        { name: "Vercel", level: 80 }
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="section">
        <h1 className="section-title">Skills & Technologies</h1>
        <p className="section-subtitle">
          A comprehensive overview of my technical skills and the technologies I work with.
        </p>
        
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-grid">
                {skillGroup.technologies.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">Redux</span>
            <span className="skill-tag">Context API</span>
            <span className="skill-tag">Jest</span>
            <span className="skill-tag">Cypress</span>
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Vite</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Sass</span>
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">UI/UX Design</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills