import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from './Search';
import Btech from './Btech';
import Mtech from './Mtech';
import Bpharma from './Bpharma';
import Phd from './Phd';

const SearchCollege = () => {
  const [state, setState] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const searchCollegeMenu = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'btech', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'mtech', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'b pharma', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'phd', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick },{ text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  useEffect(() => {
    key(searchCollegeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {state === 0 ? <Search /> : null}
        {state === 1 ? <Btech /> : null}
        {state === 2 ? <Mtech /> : null}
        {state === 3 ? <Bpharma /> : null}
        {state === 4 ? <Phd /> : null}
        {state === 5 ? <SignIn /> : null}
        {state === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default SearchCollege;