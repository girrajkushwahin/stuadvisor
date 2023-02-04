import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
    const navitems = [{ key: 'Home', path: '/' }, { key: 'Search College', path: 'searchcolleges' }, { key: 'Academics', path: 'academics' }, { key: 'Blogs', path: 'blogs' }];

    return (
        <>
            <div className="nav-container nav-bar">
                <Link to='/'><img src={logo} alt="stuadvisor" className='logo' /></Link>
                <div className="mid-link">
                    <ul className="nav-items">
                        {navitems.map((elem, ind) => <NavLink to={elem.path} className='li-item' key={ind}>{elem.key}</NavLink>)}
                    </ul>
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Search ' />
                    <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </>
    )
}

export default NavBar;