import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API;

const TopClg = () => {

  const [data, setData] = useState([]);

  const getData = async url => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }
  useEffect(() => {
    getData(`${API}/topclg`);
  }, [])

  return (
    <>
      <div className="search-main-container">
        <div className="search-result-content">
          {data.map((elem, indx) => <div className="search-content" key={indx}>
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
                <a href={elem.url} target="_blank" rel="noreferrer"><button className='redirect-btn'>Apply Now</button></a><br /><br />
                <a href={elem.reviews} target="_blank" rel="noreferrer"><button className='redirect-btn'>Reviews</button></a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default TopClg;