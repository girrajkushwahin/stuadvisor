import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

const Template = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Template;