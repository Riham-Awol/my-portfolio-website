// import React from 'react';
// import './Home.css';
// import avatar from '../assets/react.svg';

// function Home() {
//   return (
//     <div className="home">
//       <div className="hero">
//         <img src={avatar} alt="girly tech avatar" className="avatar" />
//         <h1>Hi, I’m Riham 👩‍💻</h1>
//         <p>Junior Frontend Developer with a love for pink, pixels & clean code.</p>
//         <a href="#contact" className="cta-button">💌 Let's Talk</a>
//       </div>
//     </div>
//   );
// }

// export default Home;

import Sparkle from "../components/Sparkle.jsx" // Import the new Sparkle component
import "./home.css"
import "../components/Footer"

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img src="/placeholder.svg?height=180&width=180" alt="Riham's girly tech avatar" className="hero-avatar" />
        <h1 className="gradient-text">
          <Sparkle>Hi, I’m Riham 👩‍💻</Sparkle>
        </h1>
        <p>Junior Frontend Developer with a love for pink, pixels & clean code.</p>
        <a href="#contact" className="cta-button">
          💌 Let's Talk
        </a>
      </div>
    </div>
  )
}
