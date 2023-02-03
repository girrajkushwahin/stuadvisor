import React from 'react';
import { Link } from 'react-router-dom';
import bottomImage from '../images/BottomLogo.png';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="bottom-side">
            <button className='sign-in sign-btn'>sign in</button>
            <button className='sign-up sign-btn'>sign up</button>
        </div>
        <p className='copyright-pera'>©️ {year} StuAdvisor. All rights reserved | Terms & Conditions</p>
        <Link to='/'><img src={bottomImage} alt="stuadvisor" className='footer-img'/></Link>
      </div>
    </>
  )
}

export default Footer;