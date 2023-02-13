import React, { useState } from 'react';
import Signup2 from './Signup2';
import morning from '../images/morning.jpg';
import afternoon from '../images/afternoon.jpg';
import evening from '../images/evening.jpg';
import night from '../images/night.jpg';

const SignUp = () => {
  const [data, getData] = useState({ name: '', email: '', password: '', number: '', username: '', cpassword: '', gender: '' });

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
    getData({
      name: '',
      email: '',
      password: '',
      number: '',
      username: '',
      cpassword: '',
      gender: ''
    })
  }

  const handleInput = e => {
    const { name, value } = e.target;
    getData(preVal => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const item = [{ data: 'Full Name', ph: 'Enter full name', typ: 'text', name: 'name', val: data.name, inputData: handleInput }, { data: 'Email', ph: 'Enter your email', typ: 'email', name: 'email', val: data.email, inputData: handleInput }, { data: 'Password', ph: 'Enter password', typ: 'password', name: 'password', val: data.password, inputData: handleInput }, { data: 'Phone Number', ph: 'Enter phone number', typ: 'tel', name: 'number', val: data.number, inputData: handleInput }, { data: 'Username', ph: 'Enter username', typ: 'text', name: 'username', val: data.username, inputData: handleInput }, { data: 'Confirm password', ph: 'Confirm password', typ: 'password', name: 'cpassword', val: data.cpassword, inputData: handleInput }];

  const item2 = [{ for: 'male', data: 'Male', id: 'male', val: 'male', check: data.gender === 'male', inputData: handleInput }, { for: 'female', data: 'Female', id: 'female', val: 'female', check: data.gender === 'female', inputData: handleInput }, { for: 'other', data: 'Other', id: 'other', val: 'other', check: data.gender === 'other', inputData: handleInput }]

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
            <form onSubmit={handleSubmit} className="sign-up-form">
              <div className="form-container">
                <div className="left-form">
                  <Signup2 {...{ ...item[0] }} />
                  <Signup2 {...{ ...item[1] }} />
                  <Signup2 {...{ ...item[2] }} />
                </div>
                <div className="right-form">
                  <Signup2 {...{ ...item[3] }} />
                  <Signup2 {...{ ...item[4] }} />
                  <Signup2 {...{ ...item[5] }} />
                </div>
              </div>
              <div className="gender-container">
                <h1 className=''>Select your gender</h1>
                {item2.map((value, ind) => {
                  return <div key={ind}>
                    <label className='radio-btn gender-lable' htmlFor={value.for}>{value.data}</label>
                    <input className='radio-btn' name="gender" type="radio" id={value.id} value={value.val} checked={value.check} onChange={value.inputData} required />
                  </div>
                })}
              </div>
              <div className="btn-div">
                <button type='submit' className="sign-up-btn">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;