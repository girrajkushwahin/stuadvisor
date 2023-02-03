import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { key } = useOutletContext();

  const sideMenu = [{ text: 'Get Started', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'News', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'about', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'contact', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'last', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

  useEffect(() => {
    key(sideMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        <h1>Home page</h1>
      </div>
    </>
  )
}

export default Home;