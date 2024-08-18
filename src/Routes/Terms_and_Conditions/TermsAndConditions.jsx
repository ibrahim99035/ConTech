import React from 'react';
import './TermsAndConditions.css'; // Import your CSS file
import DiyarahLogo from '/Images/Icons/CT png.png'

const TermsAndConditions = () => {
  return (
    <div>
      <div className='overlay-image'></div>
      <div className="terms-and-conditions-container">
        <header>
          <h1 className="terms-and-conditions-title">ConTech Terms and Conditions</h1>
        </header>

        <section>
          <h2>Introduction:</h2>
          <p className="terms-and-conditions-text">
            Welcome to Contech Company. By accessing or using our website, products, and services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our services.
          </p>
        </section>

        <section>
          <h2>Definitions:</h2>
          <p>
            <ul>
              <li>
                - <strong>"Company,"</strong> <strong>"we,"</strong> <strong>"us,"</strong> or <strong>"our"</strong> refers to Contech Company.
              </li>
              <li>
                - <strong>"User,"</strong>  <strong>"you,"</strong> or <strong>"your"</strong> refers to the individual or entity using our services.
              </li>
              <li>
                - <strong>"Services"</strong> refers to all the products, software, and solutions provided by Contech Company.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Acceptance of Terms:</h2>
          <p>By using our services, you confirm that you have read, understood, and agree to these Terms and Conditions. If you do not agree, you should not use our services.</p>
        </section>

        <section>
          <h2>User Obligations:</h2>
          <p>
            As a user of our services, you agree to:
            <ul>
              <li>
                - Use the services only for lawful purposes.
              </li>
              <li>
                - Provide accurate and complete information during the registration and use of our services.
              </li>
              <li>
                - Maintain the confidentiality of your account information and be responsible for all activities under your account.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Intellectual Property Rights:</h2>
          <p>
            All content, designs, trademarks, logos, and intellectual property associated with Contech Company are owned by or licensed to us. You may not copy, distribute, or use any content without our prior written permission.
          </p>
        </section>

        <section>
          <h2>Use of Services:</h2>
          <p>
            Our services are intended for personal or commercial use as specified. You agree not to:
            <ul>
              <li>
                - Attempt to reverse engineer, modify, or create derivative works of our products.
              </li>
              <li>
                - Interfere with the performance or security of our services.
              </li>
              <li>
                - Misuse our services in any manner that could harm others or infringe upon their rights.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Limitation of Liability:</h2>
          <p>
            Contech Company shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of data, revenue, or profit.
          </p>
        </section>

        <section>
          <h2>Service Modifications and Availability:</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We are not liable for any disruptions or downtime that may occur.
          </p>
        </section>

        <section>
          <h2>Termination:</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services if you breach these Terms and Conditions. Upon termination, you must cease all use of our services and delete any copies of our content in your possession.
          </p>
        </section>

        <section>
          <h2>Governing Law:</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of Egypt. Any disputes arising out of or relating to these terms shall be resolved in the courts of Egypt.
          </p>
        </section>

        <section>
          <h2>Changes to Terms:</h2>
          <p>
            Contech Company reserves the right to update or modify these Terms and Conditions at any time. Any changes will be posted on our website, and your continued use of the services signifies your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2>Contact Information:</h2>
          <p>
          If you have any questions or concerns regarding these Terms and Conditions, please contact us.
          </p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
