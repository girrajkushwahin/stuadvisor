import React, { useState } from 'react';
import searchImg from '../images/search2.jpg';
import trinityImg from '../images/Trinity.jpg';
import bhopaldata from './bhopaldata'
import Reviews from './Reviews';
const SearchClg2 = ({ heading, ph, item1, item2, item3, item4, item5, method }) => {
  const [data, setData] = useState('');

  const handleChange = e => {
    setData(e.target.value);
    const result = method(data);
    // console.log(result);
  }
  // console.log(bhopaldata)
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

export default SearchClg2;