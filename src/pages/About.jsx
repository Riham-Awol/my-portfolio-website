// import React from 'react';
// import './About.css';

// function About() {
//   return (
//     <div className="about">
//       <h2>🪄 My Journey</h2>
//       <ul className="timeline">
//         <li><span>2022</span> Started learning HTML, CSS</li>
//         <li><span>2023</span> Built mini projects and joined internships</li>
//         <li><span>2024</span> Mastered React, started freelancing</li>
//       </ul>
//     </div>
//   );
// }

// export default About;

import "./about.css"
import "../components/Footer"
import Footer from "../components/Footer"
export default function AboutPage() {
  return (
    <div className="page-card about-page">
      <h2 className="gradient-text">🪄 My Journey</h2>
      <ul className="timeline">
        <li className="timeline-item">
          <span className="timeline-year">2022</span>
          <p className="timeline-description">Started learning HTML, CSS, and JavaScript fundamentals.</p>
        </li>
        <li className="timeline-item">
          <span className="timeline-year">2023</span>
          <p className="timeline-description">
            Built mini projects and joined my first internships, gaining practical experience.
          </p>
        </li>
        <li className="timeline-item">
          <span className="timeline-year">2024</span>
          <p className="timeline-description">
            Mastered React, began freelancing, and contributed to open-source projects.
          </p>
        </li>
      </ul>
      
    </div>

  )
}
