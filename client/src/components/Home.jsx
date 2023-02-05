import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GetStarted from './GetStarted';
import News from './News';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Reviews from './Reviews';

const Home = () => {
  const [state, setState] = useState(0);
  let { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const homeMenu = [{ text: 'Get Started', icon: <i class="i-tag fa-solid fa-person-walking"></i>, click: menuClick }, { text: 'Reviews', icon: <i class="i-tag fa-regular fa-comments"></i>, click: menuClick }, { text: 'News', icon: <i class="i-tag fa-solid fa-newspaper"></i>, click: menuClick }, { text: 'About Us', icon: <i class="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Contact Us', icon: <i class="i-tag fa-solid fa-address-book"></i>, click: menuClick }, { text: 'Sign in', icon: <i class="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i class="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  useEffect(() => {
    key(homeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {state === 0 ? <GetStarted /> : null}
        {state === 1 ? <Reviews /> : null}
        {state === 2 ? <News /> : null}
        {state === 3 ? <AboutUs /> : null}
        {state === 4 ? <ContactUs /> : null}
        {state === 5 ? <SignIn /> : null}
        {state === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Home;