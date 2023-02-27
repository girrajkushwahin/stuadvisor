import React from 'react';
import searchImg from '../images/search.jpg'
import trinityImg from '../images/Trinity.jpg'
import lnctImg from '../images/LNCT.jpg'
import technoCrats from '../images/Technocrats.jpg'
const StateWise = () => {
  return (
    <>
      <div className="search-main-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>Search your dream Colleges</h1>
          <div className="search-box-img">
            <img src={searchImg} alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder='Search your dream colleges...' /><i class="fa-solid fa-magnifying-glass"></i></span>
            <div className="search-lables">
              <span>B.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>M.tech <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>MBA <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>Bsc Computers <i class="fa-solid fa-magnifying-glass"></i></span>
              <span>Nursing <i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="search-result-content">
          <div className="search-content">
            <div className="college-img">
              <img src={trinityImg} alt="College imeges" />
            </div>
            <div className="college-data">
              <div className="college-name-container">
                <h1 className='college-name'>Trinity Institute of Technology & research bhopal</h1>
                <p><span className='college-location'>bhopal,madhaya pradesh</span>|<span className='college-approved'>AICTE</span></p>
              </div>
              <div className="fee-structer">
                <h1><span className='currency-symbol'>₹</span>53,000</h1>
                <p className='course-in-fee'>B.tech - Total fees</p>
              </div>
            </div>
            <div className="redirect-college">
              <div className="redirect-btn-box">
                <button className='redirect-btn'>Apply Now</button>
              </div>
            </div>
          </div>
          <div className="search-content">
            <div className="college-img">
              <img src={technoCrats} alt="College imeges" />
            </div>
            <div className="college-data">
              <div className="college-name-container">
                <h1 className='college-name'>Trinity Institute of Technology & research bhopal</h1>
                <p><span className='college-location'>bhopal,madhaya pradesh</span>|<span className='college-approved'>AICTE</span></p>
              </div>
              <div className="fee-structer">
                <h1><span className='currency-symbol'>₹</span>53,000</h1>
                <p className='course-in-fee'>B.tech - Total fees</p>
              </div>
            </div>
            <div className="redirect-college">
              <div className="redirect-btn-box">
                <button className='redirect-btn'>Apply Now</button>
              </div>
            </div>
          </div>
          <div className="search-content">
            <div className="college-img">
              <img src={lnctImg} alt="College imeges" />
            </div>
            <div className="college-data">
              <div className="college-name-container">
                <h1 className='college-name'>Trinity Institute of Technology & research bhopal</h1>
                <p><span className='college-location'>bhopal,madhaya pradesh</span>|<span className='college-approved'>AICTE</span></p>
              </div>
              <div className="fee-structer">
                <h1><span className='currency-symbol'>₹</span>53,000</h1>
                <p className='course-in-fee'>B.tech - Total fees</p>
              </div>
            </div>
            <div className="redirect-college">
              <div className="redirect-btn-box">
                <button className='redirect-btn'>Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StateWise;