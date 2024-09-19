import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'; 
import logo_1 from '../../assets/logo_1.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

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
          {isHomePage ? (
            <ScrollLink 
              to="hero" 
              smooth={true} 
              duration={500} 
              className='nav-link' 
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
          ) : (
            <RouterLink to="/" className='nav-link' onClick={toggleMenu}>
              Home
            </RouterLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink 
              to="pages" 
              smooth={true} 
              duration={500} 
              className='nav-link' 
              onClick={toggleMenu}
            >
              Services
            </ScrollLink>
          ) : (
            <RouterLink to="/services" className='nav-link' onClick={toggleMenu}>
              Services
            </RouterLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              className='nav-link' 
              onClick={toggleMenu}
            >
              About Us
            </ScrollLink>
          ) : (
            <RouterLink to="/about" className='nav-link' onClick={toggleMenu}>
              About Us
            </RouterLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              className='nav-link' 
              onClick={toggleMenu}
            >
              Contact Us
            </ScrollLink>
          ) : (
            <RouterLink to="/contact" className='nav-link' onClick={toggleMenu}>
              Contact Us
            </RouterLink>
          )}
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
