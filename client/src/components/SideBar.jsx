import React from 'react';

const SideBar = ({ setData }) => {
    return (
        <>
            <div className="main-item main-left">
                <ul className='side-ul'>
                    {setData.map((elem, ind) => {
                        if (ind === 5 || ind === 6) return <li className='side-li sign-btn' key={ind} onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li>
                        else return <li className='side-li' key={ind} onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default SideBar;