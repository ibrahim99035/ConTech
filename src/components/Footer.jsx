import React from 'react';
import './Styles/Footer.css'; 
import DiyarahLogo from '/Images/Icons/QuemaLogo.png'

import WhatsappLogo from '/Images/Social/whatsapp.png'
import InstagramLogo from '/Images/Social/instagram.png'
import LinkedinLogo from '/Images/Social/linkedin.png'
import Twitter_Logo from '/Images/Social/twitter.png'

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
            {/* <div className="footer-content" id='contactUSFooter'>
                <h3>تواصل معنا</h3>
                <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                  <img src={WhatsappLogo} alt="Whatsapp Icon" loading="lazy" />
                </a>
                <br /> <br />
                <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                  <p>+966572696382</p>
                </a>
            </div> */}
            <div className="footer-content">
                <h3>روابط هامة</h3>
                <p><a href="/terms-and-conditions" target='_blank'>الشروط و الأحكام </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">حقوق الملكية الفكرية </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">سياسات الخصوصية</a></p> <br />
            </div>
  
            <div className="footer-content" id='followUs'>
                <h3>تواصل معنا</h3>
                <div id='iconsContainer'>
                  <a href="https://www.linkedin.com/company/diyarah-real-estate-company/" target='_blank'>
                    <FaFacebookSquare />
                  </a>
                  <a href="https://www.instagram.com/diyarah.sa/?igsh=MWMyNGtmZzN1bmozYQ%3D%3D&utm_source=qr" target='_blank'>
                    <FaInstagramSquare />
                  </a>
                  <a href="https://twitter.com/diyarahsa?s=21&t=YLugARlaRWNlnNqNJIA10w" target='_blank'>
                    <FaLinkedin />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                    <FaWhatsappSquare />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                    <FaSquareXTwitter />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=966572696382" target="_blank">
                    <SiGmail />
                  </a>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <p className="copyright">© 2024 . كل الحقوق محفوظة لشركة ديارة العقارية.</p>
        <br />
        <p id='hema'>Made by <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>Ibrahim Abu Eita</a> & <a href="http://www.linkedin.com/in/salma-khaled-539847260" target="_blank"> Salma Khaled</a></p>
    </footer>
  );
}

export default Footer;