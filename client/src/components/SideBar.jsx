import React from 'react';

const SideBar = ({ setData }) => {
    return (
        <>

            <div className="main-item main-left">
                <ul className='side-ul'>
                    {setData.map((elem,ind)=><li className='side-li' key={ind}>{elem.icon}<span>{elem.text}</span></li>
                    )}
                </ul>
                <div className="bottom-side">
                    <button className='sign-in'>sign in</button>
                    <button className='sign-up'>sign up</button>
                </div>
            </div>
        </>
    )
}

export default SideBar;