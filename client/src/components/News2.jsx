import React, { useState } from 'react';

const News2 = ({ newsheading, subContent, fullContent }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="contentBox" onClick={() => { setToggle(!toggle) }}>
            <div className="label">
                <div className="heading-content">
                    <h1>{newsheading}</h1>
                    <p>{subContent}</p>
                </div>
                <div className="toggle-icons-news" >
                    <p>{toggle ? <i className="fa-regular fa-square-minus"></i> : <i className="fa-regular fa-square-plus"></i>}</p>
                </div>
            </div>
            {toggle && <p className='full-content'>{fullContent}</p>}
        </div >
    )
}

export default News2;