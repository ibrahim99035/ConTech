import React from 'react';
import './Styles/ChatWithUsSection.css'; 

import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ChatWithUsSection = () => {
  return (
    <div>
      <div className='overlay-image'></div>
      <div className="contact-us">
        <h2>تواصل معنا</h2>
        <p>نحب أن نسمع منك, تواصل معنا عبر حساباتنا على وسائل التواصل الاجتماعي, أو أرسل لنا رسالة.</p>

        <form className="contact-form">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" id='facebookIcon'>
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" id='twitterIcon'>
              <FaSquareXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id='instgramIcon'>
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id='linkedIcon'>
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" id='whatsappIcon'>
              <FaWhatsappSquare />
            </a>
            <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer" id='gmailIcon'>
              <SiGmail />
            </a>
          </div>
          <input type="text" placeholder="اسمكك" required />
          <input type="email" placeholder="بيردك الالكتروني" required />
          <textarea placeholder="رسالتك" required></textarea>
          <button type="submit">أرسل الأن !</button>
        </form>
      </div>
    </div>
  );
}

export default ChatWithUsSection;