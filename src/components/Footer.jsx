import React from 'react';
import './Styles/Footer.css'; 
import DiyarahLogo from '/Images/Icons/CT png w-04.png'

import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id='footerLogo'>
          <a href="/">
            <img src={DiyarahLogo} alt="Company Logo" className="logo" loading="lazy" />
          </a>
          <br />
        </div>
            <div className="footer-content">
                <h3>Important Links</h3>
                <p><a href="/terms-and-conditions" target='_blank'>Terms and Conditions </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">Intellectual Property </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">Privacy Policy</a></p> <br />
                <p><a href="/contact-us" target="_blank">Contact Us</a></p> <br />
                <p><a href="/contact-us" target="_blank">Documentation</a></p> <br />
            </div>
  
            <div className="footer-content" id='followUs'>
                <h3>Social Contacts</h3>
                <div id='iconsContainer'>
                  <a href="" target='_blank' id='facebookIcon'>
                    <FaFacebookSquare />
                  </a>
                  <a href="" target='_blank' id='instgramIcon'>
                    <FaInstagramSquare />
                  </a>
                  <a href="" target='_blank' id='linkedIcon'>
                    <FaLinkedin />
                  </a>
                  <a href="" target="_blank" id='whatsappIcon'>
                    <FaWhatsappSquare />
                  </a>
                  <a href="" target="_blank" id='twitterIcon'>
                    <FaSquareXTwitter />
                  </a>
                  <a href="" target="_blank" id='gmailIcon'>
                    <SiGmail />
                  </a>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <p className="copyright">All rights reserved for ConTech Company 2024 ©.</p>
        <br />
        <p id='hema'>
          Made by <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>Ibrahim Abu Eita</a> & <a href="https://www.linkedin.com/in/mahmoud-saleh-5055801a5/" target="_blank"> Mahmoud Saleh</a>
        </p>
    </footer>
  );
}

export default Footer;