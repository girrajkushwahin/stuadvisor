import React from 'react';

const SideBar2 = ({ setData, val }) => {
    return (
        <>
            <div className="hamburger-icon">
                {val === false ? <i className="fa-solid fa-bars" onClick={setData}></i> : <i className="fa-solid fa-xmark" onClick={setData}></i>}
                <h1 className='heading-hamburger'>Home</h1>
                <span></span>
            </div>
        </>
    )
}

export default SideBar2;