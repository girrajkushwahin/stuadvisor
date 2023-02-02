import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Template = () => {
  return (
    <>
      <div className="main-container">
        <NavBar />
        <div className="main-content">
          <SideBar />
          <div className="main-item main-right">
            <Outlet />
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Template;