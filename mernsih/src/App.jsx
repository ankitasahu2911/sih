import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Pages from './components/Pages/Pages';
import DroneData from './components/DroneData/DroneData'; 
import { Element } from 'react-scroll';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={
            <>
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="pages">
                <Pages />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drone-data" element={<DroneData />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
