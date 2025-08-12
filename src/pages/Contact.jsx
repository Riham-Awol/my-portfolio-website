// import React from 'react';
// import './Contact.css';

// function Contact() {
//   return (
//     <div className="contact" id="contact">
//       <h2>📬 Contact Me</h2>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Your Message" required></textarea>
//         <button type="submit">Send 💖</button>
//       </form>
//       <div className="socials">
//         <a href="#">GitHub</a>
//         <a href="#">LinkedIn</a>
//         <a href="#">Email</a>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import Sparkle from "../components/Sparkle.jsx" // Import Sparkle for the title
import { Github, Linkedin, Mail } from "lucide-react" // Import icons
import "./contact.css" // Import the dedicated CSS for Contact page
import "../components/Footer"

export default function ContactPage() {
  return (
    <div className="page-card contact-page">
      <h2 className="gradient-text">
        <Sparkle>📬 Let's Connect!</Sparkle>
      </h2>
      <p className="contact-intro-text">Have a project in mind or just want to say hello? Feel free to reach out!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required className="form-input" />
        <input type="email" placeholder="Your Email" required className="form-input" />
        <textarea placeholder="Your Message" required className="form-textarea"></textarea>
        <button type="submit" className="submit-button">
          Send Message 💖
        </button>
      </form>

      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
          <Github className="social-icon" />
          <span>GitHub</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
          <Linkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:your.email@example.com" className="social-link" aria-label="Send an Email">
          <Mail className="social-icon" />
          <span>Email</span>
        </a>
      </div>
    </div>
  )
}
