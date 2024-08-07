import React from 'react';
import './Styles/NotFound.css'

import { ImNotification } from "react-icons/im";

import DiyarahLogo from '/Images/Icons/QuemaLogo.png'
import NotFoundIcon from '/Images/Icons/error-404.png'

const NotFound = () => {
  return (
    <div id='NotFoundContainer'>
        <div id='NotFoundCompanyLogo'>
            <a href="/">
                <img src={DiyarahLogo} alt="Company Logo" width={400} />
            </a>
        </div>
        <div id='NotFoundContent'>
            <h1>404 - الصفحة ليست موجودة مع الأسف</h1>
            <p>نأسف لعدم توفر اي خدمة على هذا الرابط, يمكنك الوصول الى الصفحة الرئيسية عبر هذا <a href="/">الرابط</a>.</p>
        </div>
        <div id="NotFoundIcon">
            <ImNotification />
        </div>
    </div>
  );
};

export default NotFound;