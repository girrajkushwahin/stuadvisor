import React from 'react';
import ThreeDImage1 from '../images/3dImage2.jpg';
const SignIn = () => {
  return (
    <>
        <div className="sign-in-container">
          <div className="left-sign-in">
            <img className='left-sign-img' src={ThreeDImage1} alt="" />
          </div>
          <div className="right-sign-in">
            <h1 className='right-heading'>Hello! <span className='right-span'>Good Morning</span></h1>
            <form action="" className="sign-in-form">
              <h1 className='heding-inside'>Login your Account</h1>
              <label className='sign-in-tags' htmlFor="">Username</label>
              <input className='sign-in-tags input-sign' placeholder='Username' type="text" required autoFocus/>
              <label className='sign-in-tags' htmlFor="">Password</label>
              <input className='sign-in-tags input-sign' placeholder='Password' type="password" required autoComplete='off'/>
              <div className="btn-div">
                <button className="sign-in-btn">Login</button>

              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SignIn;