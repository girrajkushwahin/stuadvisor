import React, { useContext } from 'react';
import { Nav2Data } from './Template';
import getStartedData from './Data';

const GetStarted = () => {
  const navData = useContext(Nav2Data);
  return (
    <>
      {getStartedData.map((val, ind) =>
        <div className="get-started-container" key={ind}>
          <img src={val.img} alt="home-img" className='get-started-image' />
          <h1 className='get-started-heading'>{val.heading}</h1>
          <p className='get-started-pera'>{val.content}</p>
          <div className="btn-div" onClick={() => navData(val.navtext)}>{val.button}</div>
        </div>
      )}
    </>
  )
}

export default GetStarted;