import React from 'react';
import { aboutData, aboutData2 } from './Data';
import animation1 from "../images/animation1.mp4"
import animation2 from "../images/animation2.mp4"
import RangeImage from "../images/RangeImage.png"
const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <div className="about-header-left">
            <h1>About <br /><span>S</span>tu<span>A</span>dvisor</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae sed qui molestias fugiat quo provident totam cumque temporibus, aliquid necessitatibus ex vel fuga impedit natus optio rem recusandae quis! Quasi, distinctio? Non, in ullam odio assumenda repellat voluptatibus libero nostrum esse dicta cumque? Dolore necessitatibus ipsum fuga dolores cum!</p>
          </div>
          <div className="about-header-right">
            <video loop={true} autoPlay={true}><source src={animation1} type="video/mp4" /></video>
          </div>
        </div>
        <hr />
        <div className="why-choose-us-about">
          <h1>Why Choose Us</h1>
          <div className="why-us">
            {aboutData.map((val, ind) => <div className="why-us-content" key={ind}>
              {val.icon}
              <h2>{val.heading}</h2>
              <p>{val.content}</p>
            </div>)}
          </div>
        </div>
        <hr />
        <h1 className='our-focus-heading'>Our Focus</h1>
        <div className="our-focus-container">
          <div className="our-focus-left our-focus">
            <h1>Our Focus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, doloribus labore commodi natus omnis ipsam numquam itaque excepturi sint officia!</p>
            <video loop={true} autoPlay={true}><source src={animation2} type="video/mp4" /></video>
          </div>
          <div className="our-focus-right our-focus">
            <img src={RangeImage} alt="stuadvisor range" />
          </div>
        </div>
        <hr />
        <div className="user-about-count">
          {aboutData2.map((val, ind) => <div className='user-count' key={ind}>
            <h1>{val.count}</h1>
            <p>{val.data}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default AboutUs;