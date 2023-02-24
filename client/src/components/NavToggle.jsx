import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SiteContext } from '../App';
import { Nav2Data } from './Template';

const NavToggle = ({ toggle, data }) => {
    const { state } = useContext(SiteContext);
    const navData = useContext(Nav2Data);

    const navitems = [{ key: 'Home', path: '/' }, { key: 'Search College', path: 'searchcolleges' }, { key: 'Academics', path: 'academics' }, { key: 'Blogs', path: 'blogs' }, { key: 'My Account', path: 'myaccount' }];

    const navitems2 = [{ key: 'Home', path: '/' }, { key: 'Search College', path: 'searchcolleges' }, { key: 'Academics', path: 'academics' }, { key: 'Blogs', path: 'blogs' }];

    return (
        <>
            <div className={data} id='nav-menu'>
                <ul className="nav-items">
                    {state ? navitems.map((elem, ind) => <div onClick={() => navData(elem.key)} key={ind}><li className='nav-item' onClick={toggle}><NavLink to={elem.path} className='li-item'>{elem.key}</NavLink></li></div>) : navitems2.map((elem, ind) => <div onClick={() => navData(elem.key)} key={ind}><li className='nav-item' onClick={toggle}><NavLink to={elem.path} className='li-item'>{elem.key}</NavLink></li></div>)}
                </ul>
            </div>
        </>
    )
}

export default NavToggle;