import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavToggle from './NavToggle';
import logo from '../images/logo.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const navToggle = () => {
        if (toggle === false) setToggle(true);
        else setToggle(false);
    }

    return (
        <>
            <div className="nav-container nav-bar">
                <Link to='/'><img src={logo} alt="stuadvisor" className='logo' /></Link>
                {toggle===false?<NavToggle toggle={navToggle} data='mid-link' />:''}
                {toggle===true?<NavToggle toggle={navToggle} data='mid-link show' />:''}
                <div className="left-nav">
                    <div className="search-box">
                        <input type="text" placeholder='Search ' />
                        <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="humberger-icon-nav"  ><i className="fa-solid fa-bars" id="nav-toggle" onClick={navToggle}></i></div>
                </div>
            </div>
        </>
    )
}

export default NavBar;