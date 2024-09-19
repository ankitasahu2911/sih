import React from 'react';
import './About.css';
import about from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Our Project</h1>
        <p>
        Our project is centered around utilizing drone technology, AI, and GIS under the SVAMITVA Scheme to revolutionize rural land mapping in India. By generating accurate, high-resolution maps of property holdings, we empower rural communities with vital 'Record of Rights' documentation. This helps reduce property disputes, enables access to bank loans, and supports comprehensive village-level planning. Our solution also facilitates sustainable development by offering data for solar panel installation, groundwater management, and infrastructure planning. Through this innovative approach, we aim to contribute to the economic progress of rural India, ensuring long-term growth and improved livelihoods for rural households.
        </p>
      </header>
      
    </div>
  );
};

export default About;
