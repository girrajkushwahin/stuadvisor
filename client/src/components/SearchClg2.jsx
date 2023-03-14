import React, { useState } from 'react';
import searchImg from '../images/search2.jpg';
import trinityImg from '../images/Trinity.jpg';

const SearchClg2 = ({ heading, ph, item1, item2, item3, item4, item5, method }) => {
  const [data, setData] = useState('');

  const handleChange = e => {
    setData(e.target.value);
    const result = method(data);
    console.log(result);
  }

  return (
    <>
      <div className="search-main-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>{heading}</h1>
          <div className="search-box-img">
            <img src={searchImg} alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder={ph} value={data} onChange={handleChange} /><i className="fa-solid fa-magnifying-glass" onClick={() => method(data)}></i></span>
            <div className="search-lables">
              <span>{item1} <i className="fa-solid fa-magnifying-glass"></i></span>
              <span>{item2} <i className="fa-solid fa-magnifying-glass"></i></span>
              <span>{item3} <i className="fa-solid fa-magnifying-glass"></i></span>
              <span>{item4} <i className="fa-solid fa-magnifying-glass"></i></span>
              <span>{item5} <i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </>
  )
}

export default SearchClg2;