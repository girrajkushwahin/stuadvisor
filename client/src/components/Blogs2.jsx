import React, { useState } from 'react';
import girlProfile from '../images/girl-profile.png';
import boyProfile from '../images/boy-profile.png';

const Blogs2 = ({ heading, author, date, blog, gender }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="blog-card" onClick={() => { setToggle(!toggle) }}>
                <div className="blog-user-profile">
                    {gender === 'male' || gender === 'other' ? <img src={boyProfile} alt="boy profile" /> : <img src={girlProfile} alt="girl profile" />}
                </div>
                <div className="blog-head-content">
                    <h1>{heading}</h1>
                    <span>Category : <span className="blog-username">edu</span></span>
                    <span>Posted by : <span className="blog-username">{author}</span></span>
                    <span>Posted on : <span className="blog-date">{date.slice(0, 10)}</span> </span>
                </div>
                <div className="blog-accordian-icon">
                    {toggle ? <span>-</span> : <span>+</span>}
                </div>
            </div>
            {toggle ? <div className="blog-card-content-container">
                <div className="blog-main-content" dangerouslySetInnerHTML={{ __html: blog }}></div>
            </div> : ''}
        </>
    )
}

export default Blogs2;