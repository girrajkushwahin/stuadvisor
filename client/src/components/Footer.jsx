import React from 'react';
import { Link } from 'react-router-dom';
import logofooter from '../images/logofooter.png';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-side">
          <button className='sign-in sign-btn'>sign in</button>
          <button className='sign-up sign-btn'>sign up</button>
        </div>
        <p className='copyright-pera'>©️ {year} StuAdvisor. All rights reserved | Terms & Conditions</p>
        <Link to='/'><img src={logofooter} alt="stuadvisor" className='footer-img' /></Link>
      </div>
    </>
  )
}

export default Footer;