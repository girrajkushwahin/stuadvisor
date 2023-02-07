import React from 'react';
import ThreeDImage1 from '../images/3dImage4.jpg';

const SignUp = () => {
  return (
    <>
      <div className="cont">
        <div className="sign-in-container">
          <div className="left-sign-in">
            <img className='left-sign-img' src={ThreeDImage1} alt="" />
          </div>
          <div className="right-sign-in">
            <h1 className='right-heading'>Hello! <span className='right-span'>Good Morning</span></h1>
              <h1 className='heding-inside'>Create your Account</h1>
            <form action="" className="sign-up-form">
              <div className="form-container">
                <div className="left-form">
                  <label className='sign-up-tags lable' htmlFor="">Full Name</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter full name' type="text" required autoFocus='true' />
                  <label className='sign-up-tags lable' htmlFor="">Email</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter email' type="email" required />
                  <label className='sign-up-tags lable' htmlFor="">Password</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter password' type="password" required autoComplete='off'/>
                </div>
                <div className="right-form">
                  <label className='sign-up-tags lable' htmlFor="">Phone Number</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter mobile' type="tel" required />
                  <label className='sign-up-tags lable' htmlFor="">DOB</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter password again' type="date" required autoComplete='off'/>
                  <label className='sign-up-tags lable' htmlFor="">Confirm password</label>
                  <input className='sign-up-tags input-sign' placeholder='Please enter password again' type="password" required autoComplete='off'/>
                </div>
              </div>
              <div className="gender-container">
                  <h1 className=''>Select your gender</h1>

                  <label className='' htmlFor="">Male </label>
                  <input className='' name="gender" type="radio" required />
                  <label className='gender-lable' htmlFor="">Female </label>
                  <input className='' name="gender" type="radio" required />
                  <label className='gender-lable' htmlFor="">Others </label>
                  <input className='' name="gender" type="radio" required />
                  
              </div>
              <div className="btn-div">
                <button className="sign-up-btn">Register</button>
              </div>
              {/* <button className="sign-in-btn">Login</button> */}
            </form>
          </div>
        </div>
        </div>
      
    </>
  )
}

export default SignUp;