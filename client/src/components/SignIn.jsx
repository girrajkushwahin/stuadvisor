import React, { useState } from 'react';
import axios from 'axios';
import Signin2 from './Signin2';
import morning from '../images/morning.jpg';
import afternoon from '../images/afternoon.jpg';
import evening from '../images/evening.jpg';
import night from '../images/night.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = 'http://127.0.0.1:8000';

const SignIn = () => {
  const [data, getData] = useState({ username: '', password: '' });

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
  } else if (hour >= 16 && hour < 20) {
    imageStatus = evening;
    greeting = 'Good Evening';
    spancss.color = 'orange';
  } else {
    imageStatus = night;
    greeting = 'Welcome';
    spancss.color = 'blue';
  }

  const loginUser = async url => {
    try {
      const res = await axios.post(url, data);
      if (res) toast.success('Success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 5000,
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
    loginUser(`${API}/login`);
    getData({
      username: '',
      password: ''
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

  const item = [{ data: 'Username', ph: 'Username', typ: 'text', name: 'username', val: data.username, inputData: handleInput }, { data: 'Password', ph: 'Password', typ: 'password', name: 'password', val: data.password, inputData: handleInput }];

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
            <form method='POST' className="sign-in-form" onSubmit={handleSubmit}>
              <Signin2 {...{ ...item[0] }} />
              <Signin2 {...{ ...item[1] }} />
              <div className="btn-div">
                <button className="sign-up-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default SignIn;