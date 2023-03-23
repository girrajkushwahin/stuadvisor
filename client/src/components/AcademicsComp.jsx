import React, { useState, useEffect } from 'react';
import searchImg from '../images/searchlogo.png';

const AcademicsComp = ({ ph, item1, item2, item3, item4, item5, heading, handleSearch }) => {

  const [data, setData] = useState('');

  const instantData = [item1, item2, item3, item4, item5];

  useEffect(() => {
    handleSearch(data);
    // eslint-disable-next-line
  }, [data]);

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
              {instantData.map((elem, indx) => <span onClick={() => setData(elem)} key={indx}>{elem}<i className="fa-solid fa-magnifying-glass"></i></span>)}
            </div>
          </div>
        </div>
        <div className="select-subjects">
          <h1>Select your Branch</h1>
          <div className="search-lables select-sub-lables">
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
        <div className="select-subjects">
          <h1>Select your Year/Sem</h1>
          <div className="search-lables select-sub-lables">
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
        <div className="select-subjects">
          <h1>Select your Subject</h1>
          <div className="search-lables select-sub-lables">
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
        <div className="select-subjects">
          <h1>Select your Unit/Chapter</h1>
          <div className="search-lables select-sub-lables">
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
            <span>fjgj<i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default AcademicsComp;