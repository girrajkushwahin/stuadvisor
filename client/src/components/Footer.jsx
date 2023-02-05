import React from 'react';
import { Link } from 'react-router-dom';
import logofooter from '../images/logofooter.png';
const Footer = ({ getEntry }) => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <p></p>
        <p className='copyright-pera'>©️ {year} StuAdvisor. All rights reserved | Terms & Conditions</p>
        <Link to='/'><img src={logofooter} alt="stuadvisor" className='footer-img' /></Link>
      </div>
    </>
  )
}

export default Footer;