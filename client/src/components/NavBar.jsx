import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <>
            <div className="nav-container nav-bar">
                    <img src={logo} alt="" className='logo'/>
                    <div className="mid-link">
                        <ul className="nav-items">
                            {/* <li className="li-item nav-item1 active">Home</li>
                            <li className="li-item nav-item2">Blogs</li>
                            <li className="li-item nav-item3">Accadmics</li>
                            <li className="li-item nav-item4">Search Colleges</li> */}
                            <NavLink to='/' className='li-item'>Home</NavLink>
                            <NavLink to='/searchcolleges' className='li-item'>Search Colleges</NavLink>
                            <NavLink to='/academics' className='li-item'>Academics</NavLink>
                            <NavLink to='/blogs' className='li-item'>Blogs</NavLink>
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