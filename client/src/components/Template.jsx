import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import SideBar2 from './SideBar2';
import Footer from './Footer';

const Template = () => {
  const [sidebarData, setSidebarData] = useState([]);
  const [value, setValue] = useState(false);

  const getData = data => {
    setSidebarData(data);
  }

  const setVal = () => {
    if (value === false) setValue(true);
    else setValue(false);
  }

  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="main-content">
          <SideBar setData={sidebarData} val={value} setVal={setVal} />
          <SideBar2 setData={setVal} />
          <Outlet context={{ key: getData }} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Template;