import React from 'react';
import getStartedData from './Data';

const GetStarted = () => {
  return (
    <>
      {getStartedData.map((val, ind) =>
        <div className="get-started-container" key={ind}>
          <img src={val.img} alt="home-img" className='get-started-image' />
          <h1 className='get-started-heading'>{val.heading}</h1>
          <p className='get-started-pera'>{val.content}</p>
          <div className="btn-div">{val.button}</div>
        </div>
      )}
    </>
  )
}

export default GetStarted;