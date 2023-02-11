import React from 'react';
import ThreeDImage1 from '../images/3dImage2.jpg';
const SignIn = () => {
  return (
    <>
      <div className="cont">
        <div className="sign-in-container">
          <div className="left-sign-in">
            <img className='left-sign-img' src={ThreeDImage1} alt="img" />
          </div>
          <div className="right-sign-in">
            <h1 className='right-heading'>Hello! <span className='right-span'>Good Morning</span></h1>
            <h1 className='heding-inside heading'>Login to your Account</h1>
            <form action="" className="sign-in-form">
              <label className='sign-in-tags lables' htmlFor="">Username</label>
              <input className='sign-in-tags input-sign' placeholder='Username' type="text" required autoFocus />
              <label className='sign-in-tags lables' htmlFor="">Password</label>
              <input className='sign-in-tags input-sign' placeholder='Password' type="password" required autoComplete='off' />
              <div className="btn-div">
                <button className="sign-up-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;