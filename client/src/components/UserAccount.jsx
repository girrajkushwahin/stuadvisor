import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { SiteContext } from '../App';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';
import Account4 from './Account4';
import Account5 from './Account5';
const API = 'http://127.0.0.1:8000';

const UserAccount = () => {
  const { dispatch } = useContext(SiteContext);
  const [data, setData] = useState(0);
  let { key } = useOutletContext();
  const navigate = useNavigate();

  const menuClick = id => {
    setData(id);
  }

  const handleSignOut = () => {
    localStorage.removeItem('jwtoken');
    dispatch({ type: 'SWITCH', payload: false });
    navigate('/', { replace: true });
  }

  const callConfidential = async url => {
    const token = localStorage.getItem('jwtoken');
    const data = { token };
    try {
      const res = await axios.post(url, data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
      navigate('/');
    }
  }

  const userMenu = [{ text: 'Account1', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'Account2', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'Account3', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'Account4', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Account5', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    callConfidential(`${API}/confidential`);
    key(userMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <Account1 /> : null}
        {data === 1 ? <Account2 /> : null}
        {data === 2 ? <Account3 /> : null}
        {data === 3 ? <Account4 /> : null}
        {data === 4 ? <Account5 /> : null}
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