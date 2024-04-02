import '../style.css'
import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <p className="span">INDIAN FLAVOURS</p>
        </a>

        <button className={`nav-open-btn ${isMenuOpen ? 'active' : ''}`} aria-label="open menu" onClick={toggleMenu}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline">
                <span className="span">Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">
                <span className="span">Menu</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <span className="span">About us</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <span className="span">Our Chef</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <span className="span">Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
        <a href="#" className="btn btn-secondary">
        <span className="text text-1">Find A Table</span>

        <span className="text text-2" aria-hidden="true">Find A Table</span>
      </a>

        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} data-nav-toggler data-overlay onClick={toggleMenu}></div>
      </div>
    </header>
  );
};


