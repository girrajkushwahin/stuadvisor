import React from 'react';
import girlProfile from '../images/girl-profile.png';
import boyProfile from '../images/boy-profile.png';

const DataPosted = ({ resp }) => {
  return (
    <>
      <div className="trending-blog-container">
        <div className="blog-cards-container">
          {resp.map((val, indx) => <div className="blog-card" key={indx}>
            <div className="blog-user-profile">
              {val.gender === 'female' ? <img src={girlProfile} alt="girl profile" /> : <img src={boyProfile} alt="girl profile" />}
            </div>
            <div className="blog-head-content">
              <h1>{val.title}</h1>
              <span>{val.content}</span>
              <span>Posted by : <span className="blog-username">{val.name}</span></span>
              <span>Posted on : <span className="blog-date">{val.date.slice(0, 10)}</span> </span>
            </div>
            <div className="blog-accordian-icon">
              <a href={val.path} download={true} className='download-btn'>Download</a>
            </div>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default DataPosted;