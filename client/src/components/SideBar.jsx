import React from 'react';

const SideBar = ({ setData }) => {
    return (
        <>

            <div className="main-item main-left">
                <ul className='side-ul'>
                    <li className='side-li side-li1'><i className="i-tag fa-solid fa-house"></i><span>{setData.item1}</span></li>
                    <li className='side-li side-li2'><i className="i-tag fa-solid fa-address-card"></i><span>{setData.item2}</span></li>
                    <li className='side-li side-li3'><i className="i-tag fa-sharp fa-solid fa-laptop"></i><span>{setData.item3}</span></li>
                    <li className='side-li side-li4'><i className="i-tag fa-brands fa-blogger-b"></i><span>{setData.item4}</span></li>
                    <li className='side-li side-li5'><i className="i-tag fa-solid fa-magnifying-glass-chart"></i><span>{setData.item5}</span></li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;