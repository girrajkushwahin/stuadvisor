import React from 'react';
import errorImage from '../images/ErrorImage.jpg';
const Error = () => {
  return (
    <>
    <div className="error-main-container">
      <div className="error-page">
        <div className="left-error">
          <img src={errorImage} alt="" className="error-image" />
        </div>
        <div className="right-error">
          <h1 className='error-heading'>Oops!<span className='error-span'>page not found on server</span></h1>
          <p className='error-pera'>The link you followed is either outdeted,inaccurate,or the server has been instructed not to let you have it</p>
          <button className='error-btn'>Go Back</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Error;