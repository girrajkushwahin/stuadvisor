import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { key } = useOutletContext();

  const sideMenu = [{ text: 'demo1', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'demo2', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'demo3', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'demo4', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'demo5', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

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