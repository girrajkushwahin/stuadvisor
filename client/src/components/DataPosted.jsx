import React from 'react';
import girlProfile from '../images/girl-profile.png';

const DataPosted = () => {
  return (
    <>
      <div className="trending-blog-container">
        <div className="blog-cards-container">
          <div className="blog-card" >
            <div className="blog-user-profile">
              <img src={girlProfile} alt="girl profile" />
            </div>
            <div className="blog-head-content">
              <h1>Download Ml Notes</h1>
              <span>Simple notes for ml prepration</span>
              <span>Posted by : <span className="blog-username">Gopal</span></span>
              <span>Posted on : <span className="blog-date">15/04/2023</span> </span>
            </div>
            <div className="blog-accordian-icon">
              <a href={girlProfile} download={true} className='download-btn'>Download</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DataPosted;