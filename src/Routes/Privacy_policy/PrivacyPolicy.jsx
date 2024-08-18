import React from 'react';
import './PrivacyPloicy.css';
import DiyarahLogo from '/Images/Icons/CT png.png'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className='overlay-image'></div>
      <div className="privacy-policy-container">
        <header>
          <h1 className="privacy-policy-title">ConTech Privacy Policy</h1>
        </header>

        <section>
          <h2>Introduction:</h2>
          <p className="privacy-policy-text">
            Welcome to Contech Company. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect:</h2>
          <p>
            We may collect the following types of information:
            <ul>
              <li>
                - <strong>Personal Information:</strong> This includes details such as your name, email address, phone number, and payment information when you register, purchase, or interact with our services.
              </li>

              <li>
                - <strong>Non-Personal Information:</strong> This includes data like your IP address, browser type, device information, and usage patterns that help us improve our services.
              </li>

              <li>
                - <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to track your activity on our site and enhance your experience.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>How We Use Your Information:</h2>
          <p>
          We use the information we collect for various purposes, including:
            <ul>
              <li>
                - Providing, maintaining, and improving our products and services.
              </li>
              <li>
                - Processing transactions and sending related information, such as purchase confirmations and invoices.
              </li>
              <li>
                - Personalizing your experience and offering tailored content, products, and services.
              </li>
              <li>
                - Communicating with you regarding updates, promotions, or customer support inquiries.
              </li>
              <li>
                - Ensuring the security of our systems and detecting fraudulent activities.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Data Security:</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based system is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Your Rights and Choices:</h2>
          <p>
            You have the following rights regarding your personal information:
            <ul>
              <li>
                - <strong>Access and Correction:</strong> You can access, update, or correct your personal information at any time through your account settings.
              </li>

              <li>
                - <strong>Opt-Out:</strong> You can opt out of receiving promotional communications from us by following the unsubscribe instructions in our emails.
              </li>

              <li>
                - <strong>Data Deletion:</strong> You can request the deletion of your personal information by contacting us directly.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Cookies and Tracking Technologies:</h2>
          <p>You can choose to set your browser to refuse cookies or to alert you when cookies are being sent. If you do not accept cookies, some features of our website may be unavailable to you.</p>
        </section>
        
        <section>
          <h2>Third-Party Link</h2>
          <p>Our website may contain links to third-party sites that are not operated by us. We are not responsible for the privacy practices of these external sites and recommend reviewing their policies before providing any personal information.</p>
        </section>

        <section>
          <h2>Children's Privacy:</h2>
          <p>Our services are not directed to children under 13, and we do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete it.</p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy:</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically. Your continued use of our services after any modifications indicates your acceptance of the updated policy.</p>
        </section>

        <section>
          <h2>Contact Us:</h2>
          <p>If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us</p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
