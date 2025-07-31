import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/we2.png"; // ✅ Make sure this image exists
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Portfolio logo" />
        <span className="brand-text">MANMATH</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
