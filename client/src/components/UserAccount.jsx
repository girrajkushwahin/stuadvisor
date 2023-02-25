import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { SignOut } from '../App';
import { Nav2Data } from './Template';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';
import Account4 from './Account4';
import Account5 from './Account5';
const API = 'http://127.0.0.1:8000';

const UserAccount = () => {
  const navData = useContext(Nav2Data);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  let { key } = useOutletContext();
  const navigate = useNavigate();

  const menuClick = id => {
    setData(id);
  }

  const callConfidential = async url => {
    const token = localStorage.getItem('jwtoken');
    const data = { token };
    try {
      await axios.post(url, data);
    } catch (err) {
      console.log(err.response.data);
      navData('Home');
      navigate('/');
    }
  }

  const userMenu = [{ text: 'Account1', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'Account2', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'Account3', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'Account4', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Account5', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'My Account';
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
    </>
  )
}

export default UserAccount;