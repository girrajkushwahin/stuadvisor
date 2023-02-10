import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {

    const navitems = [{ key: 'Home', path: '/' }, { key: 'Search College', path: 'searchcolleges' }, { key: 'Academics', path: 'academics' }, { key: 'Blogs', path: 'blogs' }];

    return (
        <>
            <div className="nav-container nav-bar">
                <Link to='/'><img src={logo} alt="stuadvisor" className='logo' /></Link>
                <div className="mid-link" id='nav-menu'>
                    {/* Add class - show */}
                    <ul className="nav-items">
                        {navitems.map((elem, ind) => <li className='nav-item'><NavLink to={elem.path} className='li-item' key={ind}>{elem.key}</NavLink></li>)}
                    </ul>
                </div>
                <div className="left-nav">
                    <div className="search-box">
                        <input type="text" placeholder='Search ' />
                        <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <div className="humberger-icon-nav"  id="nav-toggle"><i class="fa-solid fa-bars"></i></div>  
                    {/* click here */}
                </div>
            </div>
        </>
    )
}

export default NavBar;