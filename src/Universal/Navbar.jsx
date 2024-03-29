import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-content">
        <div
  id="mobile-menu-toggle"
  className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
  onClick={handleMobileMenuToggle}
  aria-label="Toggle mobile menu"
  aria-expanded={isMobileMenuOpen}
  aria-controls="mobile-menu"
>
  <div className="brand">TEXT CONVERTOR</div>
  <span className="hamburger-icon">&#9776;</span>
</div>

        {/* <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="mobile-menu-toggle"
          checked={isMobileMenuOpen}
          onChange={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        />
        <label htmlFor="mobile-menu-toggle" className="hamburger-icon">
          &#9776;
        </label> */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/textutility" onClick={closeMobileMenu}>Text Utility</Link>
          </li>
          <li>
            <Link to="/imagetextextractor" onClick={closeMobileMenu}>Image Text Extractor</Link>
          </li>
          <li>
            <Link to="/audiototextconverter" onClick={closeMobileMenu}>Audio to Text Converter</Link>
          </li>
          <li>
            <Link to="/dictionary" onClick={closeMobileMenu}>Dictionary</Link>
          </li>
        </ul>
        <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;