import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav2Data } from './Template';
import logofooter from '../images/logofooter.png';
const Footer = () => {
  const navData = useContext(Nav2Data);
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        {/* <p></p> */}
        <p className='copyright-pera'>©️ {year} StuAdvisor. All rights reserved | Terms & Conditions</p>
        <Link to='/'><img src={logofooter} alt="stuadvisor" className='footer-img' onClick={() => navData('Home')} /></Link>
      </div>
    </>
  )
}

export default Footer;