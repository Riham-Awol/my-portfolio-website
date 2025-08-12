// import React from 'react';
// import './Skills.css';

// function Skills() {
//   const skills = [
//     { name: 'HTML', level: 90 },
//     { name: 'CSS', level: 85 },
//     { name: 'JavaScript', level: 80 },
//     { name: 'React', level: 75 },
//   ];

//   return (
//     <div className="skills">
//       <h2>💡 Skills</h2>
//       <div className="skill-bars">
//         {skills.map((s, index) => (
//           <div className="skill" key={index}>
//             <label>{s.name}</label>
//             <div className="progress">
//               <div className="fill" style={{ width: `${s.level}%` }}></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Skills;

import Sparkle from "../components/Sparkle.jsx" // Import Sparkle for the title
import "./skills.css" // Import the dedicated CSS for Skills page
import "../components/Footer"

export default function SkillsPage() {
  const skills = [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 90, icon: "💅" },
    { name: "JavaScript", level: 85, icon: "💻" },
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Git & GitHub", level: 70, icon: "🐙" },
    { name: "Responsive Design", level: 90, icon: "📱" },
  ]

  return (
    <div className="page-card skills-page">
      <h2 className="gradient-text">
        <Sparkle>💡 My Creative Toolkit</Sparkle>
      </h2>
      <p className="skills-intro-text">Here's a glimpse into the technologies and tools that power my projects.</p>
      <div className="skill-list">
        {skills.map((s, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{s.icon}</span>
              <label className="skill-name">{s.name}</label>
              <span className="skill-level-text">{s.level}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${s.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
