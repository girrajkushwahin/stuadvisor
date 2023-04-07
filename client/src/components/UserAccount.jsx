import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { SignOut } from '../App';
import { Nav2Data } from './Template';
import axios from 'axios';
import PostAcademics from './PostAcademics';
import PostBlogs from './PostBlogs';
import PostReview from './PostReview';
import AddCollege from './AddCollege';
import EditProfile from './EditProfile';
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

  const userMenu = [{ text: 'Post Academics', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'Post Blogs', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'Post Review', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'Add College', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Edit Profile', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'My Account';
    callConfidential(`${API}/confidential`);
    key(userMenu);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <PostAcademics /> : null}
        {data === 1 ? <PostBlogs /> : null}
        {data === 2 ? <PostReview /> : null}
        {data === 3 ? <AddCollege /> : null}
        {data === 4 ? <EditProfile /> : null}
      </div>
    </>
  )
}

export default UserAccount;