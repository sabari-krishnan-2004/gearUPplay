import React from 'react';
import './about.css'; // Optional: Import a CSS file for custom styling
import about from '../../assets/About_title.png';
import content from '../../assets/Man_running.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='abouthead'>
        <img src={about} alt='logo' />
      </div>
      <div className='about-content'>
        <img src={content} alt='logo' />
        <p className='about-para'>
          Our project <span className='highlight'>GearUpPlay</span> simplifies sports equipment and court slot management for tennis, badminton, and other sports. Users can easily book slots, reserve equipment, and track availability in real-time. Designed for efficiency, it enhances the overall sports experience by minimizing hassle. Stay focused on the game, and let us handle the rest!
        </p>
      </div>
    </div>
  );
};

export default About;
