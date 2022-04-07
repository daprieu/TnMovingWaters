import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
      <>
        <div className="footer">
            <span><p>Tennessee Moving Waters Guide Service</p></span>
            <div>125 Sunnymeade Dr, Mt. Juliet, TN 37122</div>
            <div>E-mail: Tnmovingwaters@gmail.com</div>
            <div>Phone: (615) 506-2951</div>
            <div className='links'>
            <a href="https://www.instagram.com/tnmovingwaters/?hl=en" aria-label="Add us on Instagram"><BsInstagram /></a>
            <a href="https://www.facebook.com/tnmovingwatersguideservice/" aria-label="Add us on facebook"><BsFacebook /></a>
            <a href="https://www.youtube.com/channel/UCr3wIjfwL74OWshmIRkfevg" aria-label="Subscribe to our youtube channel"><BsYoutube /></a>
            </div>
        </div>
        
      </>
  )
}

export default Footer