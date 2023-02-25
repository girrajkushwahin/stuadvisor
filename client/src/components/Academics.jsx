import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Homework from './Homework';
import Assignments from './Assignments';
import Prepaper from './Prepaper';
import Practiseset from './Practiseset';
import Impque from './Impque';

const Academics = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const academicsData = [{ text: 'Homework', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Assignments', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Previous year papers', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'practise sets', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'important questions', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const academicsMenu = [...academicsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const academicsMenu2 = [...academicsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    if (state) key(academicsMenu2);
    else key(academicsMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <Homework /> : null}
        {data === 1 ? <Assignments /> : null}
        {data === 2 ? <Prepaper /> : null}
        {data === 3 ? <Practiseset /> : null}
        {data === 4 ? <Impque /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Academics;