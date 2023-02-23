import React, { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = 'http://127.0.0.1:8000';

const UserAccount = () => {
  const [state, setState] = useState(0);
  let { key } = useOutletContext();
  const navigate = useNavigate();

  const menuClick = id => {
    setState(id);
  }

  const callConfidential = async url => {
    const token = localStorage.getItem('jwtoken');
    const data = { token };
    try {
      const res = await axios.post(url, data);
      console.log(res);
    } catch (err) {
      console.log(err.response.data);
      navigate('/');
    }
  }

  const userMenu = [{ text: 'one', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'two', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'three', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'four', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'five', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }];

  useEffect(() => {
    callConfidential(`${API}/confidential`);
    key(userMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {/* {state === 0 ? <GetStarted /> : null}
        {state === 1 ? <Reviews /> : null}
        {state === 2 ? <News /> : null}
        {state === 3 ? <AboutUs /> : null}
        {state === 4 ? <ContactUs /> : null} */}
        <h1>Hello React</h1>
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

export default UserAccount;