import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Template = () => {
  const [sidebarData, setSidebarData] = useState([]);

  const getData = data => {
    setSidebarData(data);
  }

  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="main-content">
          <SideBar setData={sidebarData} />
          <div className="hamburger-icon"><i class="fa-solid fa-bars"></i></div>
          <Outlet context={{ key: getData }} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Template;