import React from 'react';
import morning from '../images/morning.jpg';
import afternoon from '../images/afternoon.jpg';
import evening from '../images/evening.jpg';
import night from '../images/night.jpg';

const SignUp = () => {
  let greeting = '';
  let imageStatus = '';
  const spancss = {}
  let hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    imageStatus = morning;
    greeting = 'Good Morning';
    spancss.color = 'green';
  } else if (hour >= 12 && hour < 16) {
    imageStatus = afternoon;
    greeting = 'Good Afternoon';
    spancss.color = 'red';
  } else if (hour >= 16 && hour < 19) {
    imageStatus = evening;
    greeting = 'Good Evening';
    spancss.color = 'orange';
  } else {
    imageStatus = night;
    greeting = 'Good Night';
    spancss.color = 'black';
  }
  return (
    <>
      <div className="cont">
        <div className="sign-in-container">
          <div className="left-sign-in">
            <img className='left-sign-img' src={imageStatus} alt="img" />
          </div>
          <div className="right-sign-in">
            <h1 className='right-heading'>Hello! <span className='right-span' style={spancss}>{greeting}</span></h1>
            <h1 className='heding-inside'>Create your Account</h1>
            <form action="" className="sign-up-form">
              <div className="form-container">
                <div className="left-form">
                  <label className='sign-up-tags lable' htmlFor="">Full Name</label>
                  <input className='sign-up-tags input-sign' placeholder='Enter full name' type="text" required autoFocus />
                  <label className='sign-up-tags lable' htmlFor="">Email</label>
                  <input className='sign-up-tags input-sign' placeholder='Enter your email' type="email" required />
                  <label className='sign-up-tags lable' htmlFor="">Password</label>
                  <input className='sign-up-tags input-sign' placeholder='Enter password' type="password" required autoComplete='off' />
                </div>
                <div className="right-form">
                  <label className='sign-up-tags lable' htmlFor="">Phone Number</label>
                  <input className='sign-up-tags input-sign' placeholder='Enter phone number' type="tel" required />
                  <label className='sign-up-tags lable' htmlFor="">Username</label>
                  <input className='sign-up-tags input-sign dob-cursor' placeholder='Enter username' type="text" required />
                  <label className='sign-up-tags lable' htmlFor="">Confirm password</label>
                  <input className='sign-up-tags input-sign' placeholder='Confirm password' type="password" required autoComplete='off' />
                </div>
              </div>
              <div className="gender-container">
                <h1 className=''>Select your gender</h1>

                <label className='radio-btn' htmlFor="male">Male </label>
                <input className='radio-btn' name="gender" type="radio" id='male' required />
                <label className='gender-lable radio-btn' htmlFor="female">Female </label>
                <input className='radio-btn' name="gender" type="radio" id='female' required />
                <label className='gender-lable radio-btn' htmlFor="other">Other </label>
                <input className='radio-btn' name="gender" type="radio" id='other' required />

              </div>
              <div className="btn-div">
                <button className="sign-up-btn">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;