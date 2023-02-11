import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const getToggle = ()=>{
    // /*============ MENU SHOW ===========*/
   const toggle = document.getElementById("nav-toggle"),
   nav = document.getElementById("nav-menu");

   if(toggle && nav){
       toggle.addEventListener('click',()=>{
           nav.classList.toggle('show');
       })
   }
  // /*============ REMOVE MOBILE MENU ===========*/
   const navLink = document.querySelectorAll('.li-item');
   function linkAction(){
       const navMenu = document.getElementById('nav-menu');
       navMenu.classList.remove('show');
   }
   navLink.forEach(n => n.addEventListener('click',linkAction));
  }

const NavBar = () => {
   
// =======================================================================================
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
                    <div className="humberger-icon-nav"  ><i class="fa-solid fa-bars" id="nav-toggle" onClick={getToggle}></i></div>  
                    {/* click here */}
                </div>
            </div>
        </>
    )
}

export default NavBar;