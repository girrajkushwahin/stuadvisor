import React from 'react';

const SideBar = ({ setData }) => {
    return (
        <>
            <div className="main-item main-left">
                <ul className='side-ul'>
                    {setData.map((elem, ind) => <li className='side-li' key={ind} onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default SideBar;