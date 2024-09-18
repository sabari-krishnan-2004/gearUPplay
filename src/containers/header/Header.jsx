import React from 'react'
import './header.css'
import ai from '../../assets/sports-equipment-management.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className="gradient__text">Gear Play: Elevate Your Game with Effortless Booking!</h1>
        <p>Gear Play streamlines your sports bookings with real-time updates and easy scheduling, making it simple to manage and enjoy your game time.</p>
       

        <div className='gpt3__header-content__input'>
          
          <button type='button'>Get Started</button>
        </div>
        
       

      </div>
      <div className='gpt3__header-image'>
            <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header