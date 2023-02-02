import React from 'react'

const SideBar = () => {
    return (
        <>

            <div className="main-item main-left">
                <ul className='side-ul'>
                    <li className='side-li side-li1'><i className="i-tag fa-solid fa-house"></i><span>Home</span></li>
                    <li className='side-li side-li2'><i className="i-tag fa-solid fa-address-card"></i><span>About</span></li>
                    <li className='side-li side-li3'><i className="i-tag fa-sharp fa-solid fa-laptop"></i><span>Courses</span></li>
                    <li className='side-li side-li4'><i className="i-tag fa-brands fa-blogger-b"></i><span>Blogs</span></li>
                    <li className='side-li side-li5'><i className="i-tag fa-solid fa-magnifying-glass-chart"></i><span>Top Colleges</span></li>
                </ul>
            </div>
        </>
    )
}

export default SideBar;