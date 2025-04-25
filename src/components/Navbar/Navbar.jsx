// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile menu toggle button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Left side menu items */}
        <div className={`nav-menu left-menu ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</a>
          {/*<a href="#vehicles" className="nav-item" onClick={() => setMenuOpen(false)}>Vehicles</a>*/}
          {/* <a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>About Us</a> */}
        </div>

        {/* Center logo - always centered on all devices */}
        <div className="nav-logo">
        <img src="/Logo.png" alt="Logo" />
        </div>
        
        {/* Right side menu items */}
        <div className={`nav-menu right-menu ${menuOpen ? 'open' : ''}`}>
          {/*<a href="#financing" className="nav-item" onClick={() => setMenuOpen(false)}>Financing</a>*/}
          {/* <a href="#contact" className="nav-item disabled">Contact</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
