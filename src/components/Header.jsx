import React, { useState } from 'react';
import './Styles/Header.css';
import './Styles/VideoSection.css';

import DiyarahLogo from '/Images/Icons/CT png.png'

const Header = () => {
  const [navListActive, setNavListActive] = useState(false);

  return (
    <header className="header" id='TheHeader'>
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about-us" className="nav-link">Documentation</a></li>
          <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
          <li className="nav-item"><a href="/blog" className="nav-link">Store</a></li>
          <li className="nav-item" id='contactsNav'><a href="/contact-us" className="nav-link">Contact Us</a></li>
        </ul>
        <div id= 'vlogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="vidLogo" loading="lazy" />
        </div>
      </nav>
    </header>
  );
}

export default Header;