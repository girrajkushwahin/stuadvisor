import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Template = () => {
  const [sidebarData, setSidebarData] = useState([]);
  // const [clickid, setClickid] = useState(0);

  // const menuClick = id => {
  //   setClickid(id);
  // }

  const getData = data => {
    setSidebarData(data);
  }

  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="main-content">
          <SideBar setData={sidebarData} />
          <Outlet context={{ key: getData }} />
          {/* <Outlet context={{ key: getData, menuClick: menuClick, clickid: clickid }} /> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Template;