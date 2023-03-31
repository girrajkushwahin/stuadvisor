import React, { useState } from 'react';
import searchImg from '../images/searchlogo.png';
import girlProfile from '../images/girl-profile.png'
import boyProfile from '../images/boy-profile.png'
const EduBlog = () => {
  const [data, setData] = useState('');
  // const instantData = [item1, item2, item3, item4, item5];

  const handleSearch = data => { }

  return (
    <>
      <div className="edu-blog-container">
        <div className="search-box-container">
          <h1 className='search-box-heading'>SEARCH FOR EDU BLOGs...</h1>
          <div className="search-box-img">
            <img src={searchImg} className="search-img" alt="search box img" />
          </div>
          <div className="search-input-box">
            <span className='input-span'><input type="text" placeholder='search blog' value={data} onChange={e => setData(e.target.value.trimStart())} /><i className="fa-solid fa-magnifying-glass" onClick={() => handleSearch(data)}></i></span>
          </div>
        </div>

        {/* ------------------------------------ */}
        <div className="blog-cards-container">
          <div className="blog-card">
            <div className="blog-user-profile">
              <img src={boyProfile} alt="boy profile" />
            </div>
            <div className="blog-head-content">
              <h1>What is react ? useState hook in react .</h1>
              <span>posted by : <span className="blog-username">Gopal kushwah</span></span>
              <span>posted on : <span className="blog-date">01/01/2023</span> </span>
              <span>category : <span className="blog-category">Education</span> </span>

            </div>
            <div className="blog-accordian-icon">
              <span>+</span>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-user-profile">
              <img src={girlProfile} alt="boy profile" />
            </div>
            <div className="blog-head-content">
              <h1>What is react ? useState hook in react .</h1>
              <span>posted by : <span className="blog-username">Gopal kushwah</span></span>
              <span>posted on : <span className="blog-date">01/01/2023</span> </span>
              <span>category : <span className="blog-category">Education</span> </span>

            </div>
            <div className="blog-accordian-icon">
              <span>+</span>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-user-profile">
              <img src={boyProfile} alt="boy profile" />
            </div>
            <div className="blog-head-content">
              <h1>What is react ? useState hook in react .What is react ? useState hook in react .What is react ? useState hook in react .What is react ? useState hook in react .</h1>
              <span>posted by : <span className="blog-username">Gopal kushwah</span></span>
              <span>posted on : <span className="blog-date">01/01/2023</span> </span>
              <span>category : <span className="blog-category">Education</span> </span>
            </div>
            <div className="blog-accordian-icon">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EduBlog;