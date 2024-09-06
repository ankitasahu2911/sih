import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Welcome to Our Website</h1>
      <p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus maiores deserunt, animi ullam corrupti eius iste mollitia ducimus magnam ut harum voluptate ipsum dolorum.
      </p>
      <div className="hero-action">
        <button className="hero-connect">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
