import React, { useState } from 'react';
import searchImg from '../images/searchlogo.png';
import girlProfile from '../images/girl-profile.png'
import boyProfile from '../images/boy-profile.png'
const EduBlog = () => {
  const [data, setData] = useState('');
  // const instantData = [item1, item2, item3, item4, item5];
  const [hide, setHide] = useState(true);

  const hideCardContent = () => {
    setHide(!hide);
  }
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
          <div className="blog-card" onClick={hideCardContent}>
            <div className="blog-user-profile">
              <img src={boyProfile} alt="boy profile" />
            </div>
            <div className="blog-head-content">
              <h1>What is IoT? What technologies have made IoT possible?</h1>
              <span>posted by : <span className="blog-username">Gopal kushwah</span></span>
              <span>posted on : <span className="blog-date">01/01/2023</span> </span>
            </div>
            <div className="blog-accordian-icon">
              <span>+</span>
            </div>
          </div>
          <div className={hide ? "blog-card-content-container blog-card-content-container-hide" : "blog-card-content-container"}>
            <div className="blog-main-content">
              <span><h2 className='main-heading'>What is IoT? What technologies have made IoT possible?</h2></span>
              <hr />
              <h3>What is IoT?</h3>
              <p>The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools. With more than 7 billion connected IoT devices today, experts are expecting this number to grow to 10 billion by 2020 and 22 billion by 2025. Oracle has a network of device partners.</p>
              <h3>Why is Internet of Things (IoT) so important?</h3>
              <p>The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet. These devices range from ordinary household objects to sophisticated industrial tools. With more than 7 billion connected IoT devices today, experts are expecting this number to grow to 10 billion by 2020 and 22 billion by 2025. Oracle has a network of device partners.</p>
            </div>
            <div className="blog-content-bottom">
              <div className="blog-user-profile">
                <img src={boyProfile} alt="boy profile" />
                <p>Author : Gopal kushwah</p>
                <span className="close-ic on"> ^ </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EduBlog;