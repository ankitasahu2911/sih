import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to ensuring transparency, accountability, and service excellence across all public platforms. Our mission is to promote efficient governance and contribute to the nation's growth.</p>
        </div>
        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li><Link to="/ministry">Ministry of Panchayati Raj</Link></li>
            <li><Link to="/services">Government Services</Link></li>
            <li><Link to="/grievances">Public Grievances</Link></li>
            <li><Link to="/rti">RTI Information</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
         
          <p>Email: sujalnath@gmail.com</p>
          <p>Phone: +91 9223456789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Government of India. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
