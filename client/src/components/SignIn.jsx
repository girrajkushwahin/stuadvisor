import React from 'react';
import morning from '../images/morning.jpg';
import afternoon from '../images/afternoon.jpg';
import evening from '../images/evening.jpg';
import night from '../images/night.jpg';
const SignIn = () => {
  let greeting = '';
  let imageStatus='';
  const spancss={}
  let hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    imageStatus=morning;
    greeting = 'Good Morning';
    spancss.color = 'green';
  } else if (hour >= 12 && hour < 16) {
    imageStatus=afternoon;
    greeting = 'Good Afternoon';
    spancss.color = 'red';
  } else if (hour >= 16 && hour < 19) {
    imageStatus=evening;
    greeting = 'Good Evening';
    spancss.color = 'orange';
  } else {
    imageStatus=night;
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