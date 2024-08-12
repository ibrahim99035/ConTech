import React, { useState } from 'react';
import './Styles/Header.css';
import './Styles/VideoSection.css';

import DiyarahLogo from '/Images/Icons/QuemaLogo.png'

import Maintainance from '/Images/Buildingds/mainBackground.jpg'

const Header = () => {
  const [navListActive, setNavListActive] = useState(false);

  return (
    <header className="header" id='TheHeader'>
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">الصفحة الرئيسية</a></li>
          <li className="nav-item"><a href="/sections" className="nav-link">الأقسام</a></li>
          <li className="nav-item"><a href="/about-us" className="nav-link">من نحن</a></li>
          {/* <li className="nav-item"><a href="/location" className="nav-link">موقعنا</a></li> */}
          <li className="nav-item"><a href="/news" className="nav-link">الأخبار</a></li>
          <li className="nav-item" id='contactsNav'><a href="/contact-us" className="nav-link">تواصل معنا</a></li>
        </ul>
        <div id='vlogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="vidLogo" loading="lazy" />
        </div>
      </nav>
      <div className="image-section"> {/* Changed class name */}
        <img src={Maintainance} alt="Maintenance" className="background-image" />

        <div className="content">
          <div>
          {/* <h1>شركة القمة اللامعة</h1>
          <p>نبني المستقبل.</p> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;