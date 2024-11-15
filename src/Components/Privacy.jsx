import React from 'react';
import './Privacy.css'; 

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> 12/11/2024</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, password.</li>
        <li><strong>Non-Personal Information:</strong> Usage data, device information.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information to:</p>
      <ul>
        <li>Provide and maintain our services.</li>
        <li>Personalize your experience.</li>
        <li>Send account-related communications.</li>
        <li>Improve app functionality and security.</li>
      </ul>

      <h2>3. Data Retention</h2>
      <p>Your data will be retained as long as necessary to fulfill the purposes outlined in this policy.</p>

      <h2>4. Data Security</h2>
      <p>We implement industry-standard security measures to protect your personal data. However, no data transmission over the internet can be 100% secure.</p>

      <h2>5. Sharing Your Information</h2>
      <p>We do not sell or rent your personal data, but may share it with trusted third-party service providers for specific purposes.</p>

      <h2>6. Cookies and Tracking Technologies</h2>
      <p>We use cookies to enhance your experience. You can control cookie settings through your browser.</p>

      <h2>7. Third-Party Links</h2>
      <p>Our App may contain links to third-party websites. We are not responsible for their privacy practices.</p>

      <h2>8. Children's Privacy</h2>
      <p>Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>

      <h2>9. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal data. You can also opt-out of marketing communications.</p>

      <h2>10. Changes to This Privacy Policy</h2>
      <p>We may update this policy from time to time. Please review it regularly for changes.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions or concerns, please contact us at <a href="mailto:support@ecomapp.com">support@ecomapp.com</a></p>
    </div>
  );
};

export default Privacy;