import React from 'react';

const PostAcademics = () => {
    return (
        <>
            <div className="post-accademics-container">
                <div className="h1-div">
                    <h1><span>P</span>ost <span>S</span>tudy <span>M</span>aterial</h1>
                </div>
                <div className="post-accademics-input-container">
                    <label htmlFor="">Enter your name</label>
                    <input type="text" />

                    <label htmlFor="">Enter notes name/heading</label>
                    <input type="text" />

                    <label htmlFor="">Enter about your content</label>
                    <input type="text" />


                    <label htmlFor="">Upload file</label>
                    <input type="file" className='file-input' />

                    <div>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostAcademics;