// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">💖 DevRiham</div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/skills">Skills</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

"use client" // This is still needed for client-side hooks in Next.js, but conceptually it's a plain React component.

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "./navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          💖 DevRiham
        </Link>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleLinkClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={handleLinkClick}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
