import React from 'react';
import { Link } from 'react-router-dom';
import err404 from '../images/err404.jpg';
const Error = () => {
  return (
    <>
      <div className="error-main-container">
        <div className="error-page">
          <div className="left-error">
            <img src={err404} alt="" className="error-image" />
          </div>
          <div className="right-error">
            <h1 className='error-heading'>Oops!<span className='error-span'>page not found on server</span></h1>
            <p className='error-pera'>The link you are trying to access is outdated, inaccurate or the server has been instructed not to let you in</p>
            <Link to='/' className='error-btn'>BACK TO HOME</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error;