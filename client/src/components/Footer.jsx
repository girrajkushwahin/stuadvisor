import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-container">
        <p>©️ {year} StuAdvisor. All rights reserved | Terms & Conditions</p>
      </div>
    </>
  )
}

export default Footer;