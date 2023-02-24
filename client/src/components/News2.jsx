import React, { useState } from 'react';

const News2 = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="contentBox" onClick={() => setToggle(!toggle)}>
            <div className="label">
                <h1>List Two</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                {toggle === false ? <i className="fa-regular fa-square-plus"></i> : <i className="fa-regular fa-square-minus"></i>}
            </div>
            {/* <div className="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                    aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                    incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                    omnis nulla, doloribus corrupti veniam error quasi ad!</p>
            </div> */}
            {toggle === true ?
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam, dolore ea, deleniti commodi
                    aut nulla expedita quos eius exercitationem sunt facere molestias necessitatibus deserunt ipsum
                    incidunt hic unde! Perferendis enim, iusto alias eum tenetur ullam a odio rem facere. Repellat quod
                    omnis nulla, doloribus corrupti veniam error quasi ad!</p> : ''
            }
        </div >
    )
}

export default News2;