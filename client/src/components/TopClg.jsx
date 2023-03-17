import React from 'react';
import bhopaldata from './bhopaldata'

const TopClg = () => {
  return (
    <>
      <div className="search-main-container">
        <div className="search-result-content">
          {
            bhopaldata.map((clgData) => {
              return <div className="search-content">
                <div className="college-img">
                  <img src={clgData.logo} alt="College imeges" />
                </div>
                <div className="college-data">
                  <div className="college-name-container">
                    <h1 className='college-name'>{clgData.title}</h1>
                    <p className='college-location'>{clgData.location}</p>
                  </div>
                  <div className="fee-structer">
                    <h1>{clgData.fee}</h1>
                    <p>{clgData.state}</p>
                    <p className='course-in-fee'>{clgData.course}</p>
                    <p>{clgData.rating}</p>
                  </div>
                </div>
                <div className="redirect-college">
                  <div className="redirect-btn-box">
                    <button className='redirect-btn'><a href={clgData.url} target="_blank" rel="noreferrer">Apply Now</a></button><br />
                    <br />
                    <button className='redirect-btn' ><a href={clgData.reviews} target="_blank" rel="noreferrer">Reviews</a></button>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default TopClg;