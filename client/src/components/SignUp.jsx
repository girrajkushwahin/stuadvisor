import React, { useState } from 'react';
import axios from 'axios';
import Signup2 from './Signup2';
import morning from '../images/morning.jpg';
import afternoon from '../images/afternoon.jpg';
import evening from '../images/evening.jpg';
import night from '../images/night.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = 'http://127.0.0.1:8000';

const SignUp = () => {
  const [data, getData] = useState({ name: '', email: '', password: '', number: '', username: '', cpassword: '', gender: '' });

  const [validation, setValidation] = useState({
    name: {}, email: {}, password: {}, number: {}, username: {}, cpassword: {}
  })

  const [styleVal] = useState({
    successStyle: { border: '3px solid green' },
    errStyle: { border: '3px solid red' }
  });

  const nameReg = /^[a-zA-Z][a-zA-Z ]{2,29}$/
  // eslint-disable-next-line
  const mailReg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
  // eslint-disable-next-line
  const passReg = /^[-a-zA-Z0-9\.\*\?\^\$ `~+/\\|=_)(&%#@!,<>:;'"\]\[}{]{8,25}$/
  const numReg = /^[6789]([0-9]){9}$/
  // eslint-disable-next-line
  const usrnameReg = /^[a-z_0-9]([a-z0-9\._]){3,25}$/


  let greeting = '', imageStatus = '', spancss = {}
  let hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    imageStatus = morning;
    greeting = 'Good Morning';
    spancss.color = 'green';
  } else if (hour >= 12 && hour < 16) {
    imageStatus = afternoon;
    greeting = 'Good Afternoon';
    spancss.color = 'red';
  } else if (hour >= 16 && hour < 20) {
    imageStatus = evening;
    greeting = 'Good Evening';
    spancss.color = 'orange';
  } else {
    imageStatus = night;
    greeting = 'Welcome';
    spancss.color = 'blue';
  }

  const formValidation = (name, value) => {
    if (name === 'name') {
      if (nameReg.test(value)) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    } else if (name === 'email') {
      if (mailReg.test(value)) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    } else if (name === 'password') {
      if (passReg.test(value)) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    } else if (name === 'number') {
      if (numReg.test(value)) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    } else if (name === 'username') {
      if (usrnameReg.test(value)) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    } if (name === 'cpassword') {
      if (data.password === value) setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
      else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
    }
  }

  const registerUser = async url => {
    const { name, email, password, number, username, cpassword, gender } = data;
    try {
      const res = await axios.post(url, { name, email, password, number, username, cpassword, gender });
      if (res) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, number, username } = validation;
    const { errStyle } = styleVal;
    if (data.password !== data.cpassword) toast.error('password not matching', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    else if (name.border === errStyle.border || email.border === errStyle.border || password.border === errStyle.border || number.border === errStyle.border || username.border === errStyle.border) toast.error('Enter valid data', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    else {
      registerUser(`${API}/register`);
      getData({
        name: '',
        email: '',
        password: '',
        number: '',
        username: '',
        cpassword: '',
        gender: ''
      })
      setValidation('');
    }
  }

  const handleInput = e => {
    const { name, value } = e.target;
    formValidation(name, value);
    getData(preVal => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }

  const item = [{ data: 'Full Name', ph: 'Enter full name', typ: 'text', name: 'name', val: data.name, inputData: handleInput, validation: validation.name }, { data: 'Email', ph: 'Enter your email', typ: 'email', name: 'email', val: data.email, inputData: handleInput, validation: validation.email }, { data: 'Password', ph: 'Enter password', typ: 'password', name: 'password', val: data.password, inputData: handleInput, validation: validation.password }, { data: 'Phone Number', ph: 'Enter phone number', typ: 'tel', name: 'number', val: data.number, inputData: handleInput, validation: validation.number }, { data: 'Username', ph: 'Enter username', typ: 'text', name: 'username', val: data.username, inputData: handleInput, validation: validation.username }, { data: 'Confirm password', ph: 'Confirm password', typ: 'password', name: 'cpassword', val: data.cpassword, inputData: handleInput, validation: validation.cpassword }];

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
            <form method='POST' onSubmit={handleSubmit} className="sign-up-form">
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default SignUp;