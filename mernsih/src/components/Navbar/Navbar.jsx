import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import { Link } from 'react-scroll'; 
import logo_1 from '../../assets/logo_1.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <img src={logo_1} alt="Logo" className='logo' />
      <div className='nav-toggle' onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className='nav-link' 
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="pages" 
            smooth={true} 
            duration={500} 
            className='nav-link' 
            onClick={toggleMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className='nav-link' 
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </li>
        
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className='nav-link' 
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <RouterLink to="/login" >
  <button className="nav-connect">
    Login
  </button>
</RouterLink>
    </nav>
  );
}

export default Navbar;
