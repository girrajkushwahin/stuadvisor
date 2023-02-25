import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from './Search';
import Btech from './Btech';
import Mtech from './Mtech';
import Bpharma from './Bpharma';
import Phd from './Phd';

const SearchCollege = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const searchCollegeData = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'btech', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'mtech', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'b pharma', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'phd', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const searchCollegeMenu = [...searchCollegeData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const searchCollegeMenu2 = [...searchCollegeData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Search College';
    if (state) key(searchCollegeMenu2);
    else key(searchCollegeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <Search /> : null}
        {data === 1 ? <Btech /> : null}
        {data === 2 ? <Mtech /> : null}
        {data === 3 ? <Bpharma /> : null}
        {data === 4 ? <Phd /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default SearchCollege;