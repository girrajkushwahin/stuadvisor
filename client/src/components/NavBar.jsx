import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav2Data } from './Template';
import NavToggle from './NavToggle';
import logo from '../images/logo.png';
import secLogo from '../images/logofooter.png';

const NavBar = () => {
    const navData = useContext(Nav2Data);
    const [toggle, setToggle] = useState(false);
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });

    const navToggle = () => {
        if (toggle === false) setToggle(true);
        else setToggle(false);
    }

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    return (
        <>
            <div className="nav-container nav-bar">
                {screenSize.dynamicWidth > 1224 ? <Link to='/'><img src={logo} alt="stuadvisor" className='logo' onClick={() => navData('Home')} /></Link> : <Link to='/'><img src={secLogo} alt="stuadvisor" className='sec-logo' onClick={() => navData('Home')} /></Link>}
                {toggle === false ? <NavToggle toggle={navToggle} data='mid-link' /> : <NavToggle toggle={navToggle} data='mid-link show' />}
                <div className="left-nav">
                    <div className="search-box">
                        <input type="text" placeholder='Search ' />
                        <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    {toggle === false ? <div className="humberger-icon-nav"><i className="fa-solid fa-bars" id="nav-toggle" onClick={navToggle}></i></div> : <div className="humberger-icon-nav"  ><i className="fa-solid fa-xmark" id="nav-toggle" onClick={navToggle}></i></div>}
                </div>
            </div>
        </>
    )
}

export default NavBar;