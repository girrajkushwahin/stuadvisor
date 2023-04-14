import React, { useState } from 'react';

const News2 = ({ heading, subheading, detail }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="contentBox" onClick={() => { setToggle(!toggle) }}>
            <div className="label">
                <div className="heading-content">
                    <h1>{heading}</h1>
                    <p>{subheading}</p>
                </div>
                <div className="toggle-icons-news" >
                    <p>{toggle ? <i className="fa-regular fa-square-minus"></i> : <i className="fa-regular fa-square-plus"></i>}</p>
                </div>
            </div>
            {toggle && <p className='full-content'>{detail}</p>}
        </div >
    )
}

export default News2;