import React from 'react';
import './Styles/Footer.css'; 
import DiyarahLogo from '/Images/Icons/QuemaLogo.png'

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
                <h3>روابط هامة</h3>
                <p><a href="/terms-and-conditions" target='_blank'>الشروط و الأحكام </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">حقوق الملكية الفكرية </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">سياسات الخصوصية</a></p> <br />
            </div>
  
            <div className="footer-content" id='followUs'>
                <h3>تواصل معنا</h3>
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
        <p className="copyright">© 2024 . كل الحقوق محفوظة لشركة القمة اللامعة.</p>
        <br />
        <p id='hema'>
          Made by <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>Ibrahim Abu Eita</a> & <a href="https://www.linkedin.com/in/ahmed-khamees-757980252" target="_blank"> Ahmed Khamees</a>
        </p>
    </footer>
  );
}

export default Footer;