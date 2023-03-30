import React from 'react';
import girlProfile from '../images/girl-profile.png'
import boyProfile from '../images/boy-profile.png'

const TrendingBlogs = () => {
  return (
    <>
      <div className="trending-blog-container">
        <div className="blog-cards-container">
          <div className="blog-card">
            <div className="blog-user-profile">
              <img src={boyProfile} alt="boy profile" />
            </div>
            <div className="blog-head-content">
              <h1>What is react ? useState hook in react .</h1>
              <span>posted by : <span className="blog-username">Gopal kushwah</span></span>
              <span>posted on : <span className="blog-date">01/01/2023</span> </span>
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

export default TrendingBlogs;