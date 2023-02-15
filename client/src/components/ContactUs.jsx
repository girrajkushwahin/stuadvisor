import React from 'react';
import comImg1 from '../images/companyImg1.jpg';
import comImg2 from '../images/companyImg2.jpg';
import comImg3 from '../images/companyImg3.png';
import comImg4 from '../images/companyImg4.jpg';
import comImg5 from '../images/companyImg5.jpg';

// const left = document.querySelector(".left")
// const right = document.querySelector(".right")
// const slider = document.querySelector(".slider")
// const images = document.querySelectorAll(".image")
// const bottom = document.querySelector(".bottom")

// let slideNumber = 1;
// const length = images.length;

// for(let i = 0;i<length;i++){
//     const div = document.createElement("div")
//     div.className = "button";
//     bottom.appendChild(div);
// }

// const buttons = document.querySelectorAll(".button")
// // buttons[0].style.backgroundColor = "white"

// const resetBg = ()=>{
//     buttons.forEach(button=>{
//         button.style = {backgroundColor : "transparent"};
//     })
// }

// buttons.forEach((button,i)=>{
//     button.addEventListener("click",()=>{
//         resetBg();
//         slider.style ={transform : `translateX(-${i*800}px)`};
//         buttons[i].style.backgroundColor = "white"
//       });
//     });
    
// const nextSlide = ()=>{
//     slider.style ={transform : `translateX(-${slideNumber * 800}px)`};
//     slideNumber++
//   }
//   const prevSlide = ()=>{
//     slider.style ={transform : `translateX(-${(slideNumber-2) * 800}px)`};
//     slideNumber--
//   }
  
//   const getFirstSlide = ()=>{
//     slider.style ={transform : `translateX(-0px)`};
//     slideNumber = 1;
//   }
//   const getLastSlide = ()=>{
//     slider.style ={transform : `translateX(-${(length-1)*800}px)`};
//     slideNumber = length;
// }
// const changeColor = ()=>{
//     resetBg();
//     buttons[slideNumber-1].style={backgroundColor : "white"}
// }
// right.addEventListener("click", ()=>{
//     slideNumber<length ? nextSlide() : getFirstSlide();
//   changeColor();
// });


// left.addEventListener("click", ()=>{
//     slideNumber > 1 ? prevSlide() : getLastSlide();
//     changeColor();
    
// });

const ContactUs = () => {
  return (
    <>
        <div className="contact-container">
          <div className="company-contact">
            <h1 className='get-in-touch'> <span>Get</span> in touch</h1>
            <div className="company-details">
              <span><h2>Email</h2><p>contact@stuadvisor.com</p></span>
              <span><h2>Phone</h2><p>9876543210</p></span>
              <span><h2>Address</h2><p>Indrapuri, Bhopal (MP) </p></span>
            </div>
          </div>
          {/* ************************************************************* */}
          <div className="contact-slider">
            <div class="site">
            </div>
              <div className="top">
              <i className="fa-solid fa-angles-left arrow left"></i>
                <div className="frame">
                    <div className="slider">
                      <img className='image' src={comImg1} alt="" />
                      <img className='image' src={comImg2} alt="" />
                      <img className='image' src={comImg3} alt="" />
                      <img className='image' src={comImg4} alt="" />
                      <img className='image' src={comImg5} alt="" />
                    </div>    
                </div>
                <i className="fa-solid fa-angles-right arrow left"></i>
            </div>
            <div className="bottom">
            </div>
          </div>
          <div className="message-contact-form">
            <h1  className='get-in-touch'><span>Lets</span> Talk Something</h1>
            <div className="send-message">
              <div className="contact-form">
                <span><h1>Phone</h1><input type="text" placeholder='Enter Phone'/></span>
                <span><h1>Email</h1><input type="text" placeholder='Enter Email'/></span>
              </div>
              <textarea name="" cols="116" className="contact-textarea" placeholder='Enter message here.....'></textarea>
            </div>
            <div className="send-btn-div">
              <button type='button' className='send-btn'>Send Message</button>
            </div>
          </div>
          <div className="contact-form-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.500615116098!2d77.4531487770454!3d23.25672375735795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4206867f624f%3A0xe7a20a45699fb32c!2sIndrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1676395806094!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    </>
  )
}

export default ContactUs;