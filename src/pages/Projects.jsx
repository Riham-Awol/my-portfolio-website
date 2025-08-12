// import React from 'react';
// import './Projects.css';

// function Projects() {
//   const projects = [
//     { title: 'Portfolio Site', description: 'A personal pink-themed portfolio.', link: '#' },
//     { title: 'E-commerce App', description: 'React-based store with cute UI.', link: '#' },
//     { title: 'Blog Platform', description: 'Tech blog with terminal vibes.', link: '#' },
//   ];

//   return (
//     <div className="projects">
//       <h2>✨ Projects</h2>
//       <div className="project-list">
//         {projects.map((p, index) => (
//           <div className="project-card" key={index}>
//             <h3>{p.title}</h3>
//             <p>{p.description}</p>
//             <a href={p.link}>View Project ➜</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
import Sparkle from "../components/Sparkle.jsx" // Import Sparkle for the title
import "./projects.css" // Import the dedicated CSS for Projects page
import "../components/Footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Site",
      icon: "💖",
      description: "A personal pink-themed portfolio showcasing my journey and skills.",
      link: "#",
    },
    {
      title: "E-commerce App",
      icon: "🛍️",
      description: "React-based online store with a cute and intuitive user interface.",
      link: "#",
    },
    {
      title: "Blog Platform",
      icon: "✍️",
      description: "A tech blog platform with a unique terminal-inspired design.",
      link: "#",
    },
    {
      title: "Task Manager",
      icon: "✅",
      description: "A simple and elegant task management application built with React.",
      link: "#",
    },
  ]

  return (
    <div className="page-card projects-page">
      <h2 className="gradient-text">
        <Sparkle>✨ My Creative Projects</Sparkle>
      </h2>
      <div className="project-grid">
        {projects.map((p, index) => (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
            <h3>
              {p.icon} {p.title}
            </h3>
            <p>{p.description}</p>
            <span className="project-link-text">View Project ➜</span>
          </a>
        ))}
      </div>
    </div>
  )
}
