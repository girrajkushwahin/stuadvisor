import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GetStarted from './GetStarted';
import News from './News';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Reviews from './Reviews';

const Home = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  let { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const homeData = [{ text: 'Get Started', icon: <i className="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'Reviews', icon: <i className="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'News', icon: <i className="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'About Us', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Contact Us', icon: <i className="i-tag fa-solid fa-address-book"></i>, click: menuClick }]

  const homeMenu = [...homeData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const homeMenu2 = [...homeData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Home';
    if (state) key(homeMenu2);
    else key(homeMenu);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <GetStarted /> : null}
        {data === 1 ? <Reviews /> : null}
        {data === 2 ? <News /> : null}
        {data === 3 ? <AboutUs /> : null}
        {data === 4 ? <ContactUs /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Home;