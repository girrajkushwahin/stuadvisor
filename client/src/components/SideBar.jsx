import React from 'react';

const SideBar = ({ setVal, val, setData }) => {
    return (
        <>
            <div className="left-container">
                {val === false ? <div className='main-item show-second'>
                    <ul className='side-ul'>
                        {setData.map((elem, ind) => {
                            if (ind === 5 || ind === 6) return <div onClick={setVal} key={ind}> <li className='side-li sign-btn' onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li></div>
                            else return <div onClick={setVal} key={ind}> <li className='side-li' onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li> </div>
                        })}
                    </ul>
                </div> : ''}
                {val === true ? <div className='main-item main-left'>
                    <ul className='side-ul'>
                        {setData.map((elem, ind) => {
                            if (ind === 5 || ind === 6) return <div onClick={setVal} key={ind}> <li className='side-li sign-btn' onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li> </div>
                            else return <div onClick={setVal} key={ind}> <li className='side-li' onClick={() => { elem.click(ind) }}>{elem.icon}<span>{elem.text}</span></li> </div>
                        })}
                    </ul>
                </div> : ''}
            </div>
        </>
    )
}

export default SideBar;