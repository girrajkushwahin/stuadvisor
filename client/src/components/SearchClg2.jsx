import React, { useState, useEffect } from 'react';
import searchImg from '../images/search2.jpg';
import axios from 'axios';
const API = 'http://127.0.0.1:8000';

const SearchClg2 = ({ heading, ph, item1, item2, item3, item4, item5, method }) => {

  const [data, setData] = useState('');
  const [clgdata, setClgData] = useState([]);

  const getData = async url => {
    try {
      const res = await axios.get(url);
      setClgData(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }
  useEffect(() => {
    getData(`${API}/clgdata`);
  }, [])

  const handleChange = e => {
    setData(e.target.value);
    // const result = method(data);
    // console.log(result);
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
          {clgdata.map((elem, indx) => <div className="search-content" key={indx}>
            <div className="college-img">
              <img src={elem.logo} alt="College imeges" />
            </div>
            <div className="college-data">
              <div className="college-name-container">
                <h1 className='college-name'><a href={elem.url} target="_blank" rel="noreferrer">{elem.title}</a></h1>
                <p className='college-location'>{elem.location}</p>
              </div>
              <div className="fee-structer">
                <h1>{elem.fee}</h1>
                <p className='course-in-fee'>{elem.course}</p>
                <p>{elem.rating}</p>
              </div>
            </div>
            <div className="redirect-college">
              <div className="redirect-btn-box">
                <a href={elem.url} target="_blank" rel="noreferrer"><button className='redirect-btn'>Apply Now</button></a><br />
                <br />
                <a href={elem.reviews} target="_blank" rel="noreferrer"><button className='redirect-btn' >Reviews</button></a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchClg2;