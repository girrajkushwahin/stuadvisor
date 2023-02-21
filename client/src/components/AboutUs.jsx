import React from 'react';
import animation1 from "../images/animation1.mp4"
import animation4 from "../images/animation4.mp4"
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
            <a href='' target="_blank"><video loop="true" autoplay="true"><source src={animation1} type="video/mp4" /></video></a>
          </div>
        </div>
        <hr />
        {/* ************************************* */}
        <div className="why-choose-us-about">
          <h1>Why Choose Us</h1>
          <div className="why-us">
            <div className="why-us-content">
              <a href=""><i class="fa-solid fa-house-chimney"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
            <div className="why-us-content">
              <a href=""><i class="fa-solid fa-book"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
            <div className="why-us-content">
              <a href=""><i class="fa-regular fa-comment"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
            <div className="why-us-content">
              <a href=""><i class="fa-duotone fa-users"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
            <div className="why-us-content">
              <a href=""><i class="fa-regular fa-star"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
            <div className="why-us-content">
              <a href=""><i class="fa-solid fa-comment"></i></a>
              <h2>Learn At Home</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, numquam? Facere est hic velit! Recusandae quaerat eum quos quod autem.</p>
            </div>
          </div>
        </div>
        <hr />
        {/* ******************************************** */}
        <h1 className='our-focus-heading'>Our Focus</h1>
        <div className="our-focus-container">

          <div className="our-focus-left our-focus">
            <h1>Our Focus</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, doloribus labore commodi natus omnis ipsam numquam itaque excepturi sint officia!</p>
            <a href=""><video loop="true" autoPlay="true"><source src={animation4} type="video/mp4" /></video></a>
          </div>
          <div className="our-focus-right our-focus">
            <img src={RangeImage} alt="" />
          </div>
        </div>
        <hr />
        <div className="user-about-count">
          <div className='user-count'>
            <h1>20+</h1>
            <p>Supporting Since</p>
          </div>
          <div className='user-count'>
            <h1>5000+</h1>
            <p>Universities Data</p>
          </div>
          <div className='user-count'>
            <h1>25000+</h1>
            <p>Colleges Data</p>
          </div>
          <div className='user-count'>
            <h1>300+</h1>
            <p>Notes Available</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;