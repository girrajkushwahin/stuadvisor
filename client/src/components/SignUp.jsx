import React from 'react';
import ThreeDImage1 from '../images/3dImage4.jpg';

const SignUp = () => {
  return (
    <>
      <div className="cont">
        <div className="sign-in-container">
          <div className="left-sign-in">
            <img className='left-sign-img' src={ThreeDImage1} alt="img" />
          </div>
          <div className="right-sign-in">
            <h1 className='right-heading'>Hello! <span className='right-span'>Good Morning</span></h1>
            <h1 className='heding-inside'>Create your Account</h1>
            <form action="" className="sign-up-form">
              <div className="form-container">
                <div className="left-form">
                  <label className='sign-up-tags lable' htmlFor="">Full Name</label>
                  <input className='sign-up-tags input-sign' placeholder='Enter full name' type="text" required autoFocus='true' />
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
                <label className='gender-lable radio-btn' htmlFor="other">Others </label>
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