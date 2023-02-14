import React from 'react';

const SideBar2 = ({ setData }) => {
    return (
        <>
            <div className="hamburger-icon">
                <i className="fa-solid fa-bars" onClick={setData}></i>
                <h1 className='heading-hamburger'>Home</h1>
                <span></span>
            </div>
        </>
    )
}

export default SideBar2;