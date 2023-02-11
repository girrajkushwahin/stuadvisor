import React from 'react';
import { NavLink } from 'react-router-dom';

const NavToggle = ({toggle, data}) => {
    const navitems = [{ key: 'Home', path: '/' }, { key: 'Search College', path: 'searchcolleges' }, { key: 'Academics', path: 'academics' }, { key: 'Blogs', path: 'blogs' }];

    return (
        <>
            <div className={data} id='nav-menu'>
                <ul className="nav-items">
                    {navitems.map((elem, ind) => <li className='nav-item' key={ind} onClick={toggle}><NavLink to={elem.path} className='li-item'>{elem.key}</NavLink></li>)}
                </ul>
            </div>
        </>
    )
}

export default NavToggle;