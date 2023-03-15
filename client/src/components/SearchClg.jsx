import React from 'react';
import searchImg from '../images/search.jpg';
import trinityImg from '../images/Trinity.jpg';
import bhopaldata from './bhopaldata'

const SearchClg = () => {
  return (
    <>
      <div className="search-main-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>Search your dream College...</h1>
          <div className="search-box-img">
            <img src={searchImg} alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder='Search your dream college...' /><i className="fa-solid fa-magnifying-glass"></i></span>
            {/* <div className="search-lables">
              <span>B.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>M.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>MBA <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>Bsc Computers <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>Nursing <i class="fa-solid fa-magnifying-glass"></i></span>
            </div> */}
          </div>
        </div>
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
                    <button className='redirect-btn'><a href={clgData.url} target="_blank">Apply Now</a></button><br />
                    <br />
                    <button className='redirect-btn' ><a href={clgData.reviews} target="_blank">Reviews</a></button>
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

export default SearchClg;