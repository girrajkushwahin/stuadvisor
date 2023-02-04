import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import GetStarted from './GetStarted';
import News from './News';
import About from './About';
import Contact from './Contact';
import Last from './Last';

const Home = () => {
  const [state, setState] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const homeMenu = [{ text: 'Get Started', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'News', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'about', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'contact', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'last', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }];

  useEffect(() => {
    key(homeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {state === 0 ? <GetStarted /> : null}
        {state === 1 ? <News /> : null}
        {state === 2 ? <About /> : null}
        {state === 3 ? <Contact /> : null}
        {state === 4 ? <Last /> : null}
      </div>
    </>
  )
}

export default Home;