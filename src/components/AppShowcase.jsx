import React from 'react';
import './Styles/AppShowcase.css'; 
import Logo from '/Images/Icons/CT png.png';
import GooglePlayIcon from '/Images/Icons/google-play.png'

const AppShowcase = () => {
  return (
    <div className="showcase-container">
      <div className="phone-frame">
        <div className="screen">
          {/* Replace the content below with your actual app UI */}
          <div className="app-preview">
            <div id="CTIconMobile">
                <img src={Logo} alt="ConTech Logo" />
            </div>
            <h2>IoT Dashboard</h2>
            <p>Monitor and control your devices from anywhere.</p>
            <button className="action-button">Get Started</button>
            <div id='gogolePlayIcon'>
                <img src={GooglePlayIcon} alt="Google Play Icon" />
            </div>
            <span>Click Google Play icon to download the App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;