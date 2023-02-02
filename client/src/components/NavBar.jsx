import React from 'react';
import logo from '../images/logo.png';
import searchIcon from '../images/search-icon.png'
import searchIcon1 from '../images/search-icon-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return (
        <>
            <div className="nav-container nav-bar">
                    <img src={logo} alt="" className='logo'/>
                    <div className="mid-link">
                        <ul className="nav-items">
                            <li className="li-item nav-item1 active">Home</li>
                            <li className="li-item nav-item2">Blogs</li>
                            <li className="li-item nav-item3">Accadmics</li>
                            <li className="li-item nav-item4">Search Colleges</li>
                        </ul>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder='Search ' />
                        <img src={searchIcon1} alt="" />
                    </div>
            </div>
        </>
    )
}

export default NavBar;