import React from 'react';
import './Pages.css'; 
import { Link } from 'react-router-dom';
import drone from '/src/assets/drone.jpg';
import service from '/src/assets/service.jpg';
import roof from '/src/assets/roof.jpg';


const Pages = () => {
  return (
    <div className="card-container">
        <h2 className="section-heading">Our Services</h2> 
      <div className="card" style={{ backgroundImage: `url(${drone})` }}>
        <div className="card-body">
        
          <a href="#" className="card-button"><h3>Rural Development</h3></a>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${service})` }}>
        <div className="card-body">
         
          
          <a href="#" className="card-button"><h3>Services and Department</h3></a>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url(${roof})` }}>
        <div className="card-body">
         
        <Link to="/drone-data" className="card-button"><h3>Drone Data</h3></Link>
        </div>
      </div>
    </div>
  );
};

export default Pages;
