import React, { useState } from 'react';
import searchImg from '../images/searchlogo.png';

const AcademicsComp = ({ ph, item1, item2, item3, item4, item5, heading, handleSearch }) => {

  const [data, setData] = useState('');
  // console.log(data);

  return (
    <>
      <div className="container-academics">
        <div className="search-box-container">
          <h1 className='search-box-heading'>{heading}</h1>
          <div className="search-box-img">
            <img src={searchImg} className="search-img" alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" value={data} placeholder={ph} onChange={e => setData(e.target.value.trimStart())} /><i className="fa-solid fa-magnifying-glass" onClick={() => handleSearch(data)}></i></span>
            <div className="search-lables">
              <span onClick={() => setData(item1)}>{item1}<i className="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => setData(item2)}>{item2}<i className="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => setData(item3)}>{item3}<i className="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => setData(item4)}>{item4}<i className="fa-solid fa-magnifying-glass"></i></span>
              <span onClick={() => setData(item5)}>{item5}<i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcademicsComp;