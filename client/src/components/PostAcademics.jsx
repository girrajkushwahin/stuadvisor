import React from 'react';

const PostAcademics = ({ resp }) => {
    // const [data, setData] = useState({})

    return (
        <>
            <div className="post-accademics-container">
                <div className="h1-div">
                    <h1><span>P</span>ost <span>S</span>tudy <span>M</span>aterial</h1>
                </div>
                <div className="post-accademics-input-container">
                    <label>Enter your name</label>
                    <input type="text" />
                    <label>Enter notes title</label>
                    <input type="text" placeholder='Enter title' />
                    <label>Describe about your content</label>
                    <input type="text" placeholder='Describe content' />
                    <label>Upload file</label>
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