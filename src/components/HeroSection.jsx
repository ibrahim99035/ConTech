import React from 'react';
import './Styles/HeroSection.css';

import HeroSectionBuildings from '/Images/Icons/CT png w-04.png'

const HeroSection = () => { 
  return (
    <div className="about-us-section">
      <div className='overlay-image'></div>
      <div className="custom-header">
        <h2>ConTech - IoT Solutions</h2>
        <p className="sub-header">  
          Contech Company creates technologies to facilitate dealing with 
          electrical appliances remotely and in a smart way, and designs 
          complete technological systems to control homes and companies 
          and make them completely smart, in addition to creating and 
          innovating solutions to various technical problems
        </p>
      </div>
      <div id='heroImageDiv'>
        <img
            src= {HeroSectionBuildings}
            alt="Buidings Grafity"
            className="hero-image"
            id='HeroBuilding'
            loading="lazy" 
        />
      </div>
      <br />
      <div className="Hprofessional-intro-section">
        <p>
          Our solutions seamlessly integrate cutting-edge IoT devices, AI, and cloud computing, delivering a unified smart experience for homes and businesses.  
        </p>

        <p>
          Contech specializes in secure, scalable, and intuitive systems, offering total control over your environment through mobile apps, voice commands, and web interfaces.
        </p>

        <p>
          Our smart product range includes automated lighting, HVAC systems, energy management, and advanced security controls for optimized comfort and efficiency.
        </p>
      </div>
      <div id='SeeMoreDiv'>
        <a href="/about-us" target='_blank' id='SeeMore'>See More</a>
      </div>
    </div>
  );
};

export default HeroSection;