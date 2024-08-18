import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/Images/Icons/CT png.png'

const IntellectualPropertyRights = () => {
  return (
    <div>
      <div className='overlay-image'></div>
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">ConTech Intellectual Property Rights</h1>
        </header>

        <section>
          <h2>Ownership of Content:</h2>
          <p className="intellectual-property-rights-text">
            All content, materials, and intellectual property available on or through Contech Company, including but not limited to text, graphics, logos, images, software, designs, icons, audio clips, video clips, data compilations, page layouts, user interfaces, and the overall look and feel (collectively referred to as “Content”), are the exclusive property of Contech Company or our licensors. These are protected by applicable copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2>Trademarks and Logos:</h2>
          <p>
            The trademarks, service marks, logos, and trade names displayed on our website or in our products (collectively, the “Trademarks”) are the registered and unregistered marks of Contech Company or our affiliates and partners. You are not permitted to use any of these Trademarks without our prior written consent.
          </p>
        </section>

        <section>
          <h2>License to Use Content:</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Content solely for personal or commercial use in connection with our services. This license does not grant you any rights to:
            <ul>
              <li>- Copy, reproduce, distribute, republish, download, display, post, or transmit the Content in any form or by any means without prior written permission.</li>
              <li>- Modify, alter, create derivative works from, or reverse engineer any part of the Content.</li>
              <li>- Exploit any of the Content for commercial gain or public display.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2>User-Generated Content:</h2>
          <p>
            If you submit any content, ideas, suggestions, or materials (collectively “Submissions”) to us, you grant Contech Company a worldwide, perpetual, irrevocable, royalty-free, and fully transferable license to use, reproduce, modify, distribute, and display such Submissions for any purpose. You represent and warrant that you own or have the necessary rights to grant us such license, and that your Submissions do not infringe the intellectual property rights of any third party.
          </p>
        </section>

        <section>
          <h2>Copyright Infringement and DMCA Policy:</h2>
          <p>
            We respect the intellectual property rights of others and expect our users to do the same. If you believe that your copyrighted material has been used on our site or services in a way that constitutes copyright infringement, please contact us with a detailed notice in accordance with the Digital Millennium Copyright Act (DMCA) or other applicable laws.
          </p>
        </section>

        <section>
          <h2>Termination of Rights:</h2>
          <p>
            We reserve the right to terminate or suspend any licenses granted to you under these Terms and Conditions if you violate any provisions related to intellectual property rights.
          </p>
        </section>

        <section>
          <h2>Reservation of Rights:</h2>
          <p>
            All rights not expressly granted under these Terms and Conditions are reserved by Contech Company. No content or materials from our website or services may be used in a manner not expressly authorized by these terms.
          </p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default IntellectualPropertyRights;