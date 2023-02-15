import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import SideBar2 from './SideBar2';
import Footer from './Footer';
const Nav2Data = React.createContext();

const Template = () => {
  const [sidebarData, setSidebarData] = useState([]);
  const [value, setValue] = useState(false);
  const { pathname } = useLocation();
  const [nav2Val, setNav2Val] = useState(() => {
    if (pathname === '/') return 'Home';
    else if (pathname === '/searchcolleges') return 'Search College'
    else if (pathname === '/academics') return pathname.charAt(1).toUpperCase() + pathname.slice(2);
    else if (pathname === '/blogs') return pathname.charAt(1).toUpperCase() + pathname.slice(2);
  });

  const getData = data => {
    setSidebarData(data);
  }

  const setVal = () => {
    if (value === false) setValue(true);
    else setValue(false);
  }

  const nav2Data = data => {
    setNav2Val(data);
  }

  return (
    <>
      <div className="main-container">
        <Nav2Data.Provider value={nav2Data}>
          <NavBar />
        </Nav2Data.Provider>
        <div className="main-content">
          <SideBar setData={sidebarData} val={value} setVal={setVal} />
          <SideBar2 setData={setVal} val={value} navValue={nav2Val} />
          <Outlet context={{ key: getData }} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Template;
export { Nav2Data };