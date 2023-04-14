import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = 'http://127.0.0.1:8000';

const PostBlogs = ({ resp }) => {

    const [data, setData] = useState({ heading: '', blog: '', category: '', author: resp.name, gender: resp.gender });
    const [data2, setData2] = useState({ newheading: '', newsubheading: '', para: '' });
    const [InputField, handleInputField] = useState({ field1: '', field2: '' });
    const [uniqueID, handleUniqueID] = useState({ id: '', updateText: '' });
    const [preview, setPreview] = useState([]);
    const [updateData, setUpdateData] = useState({ heading: '', subheading: '', para: '' });
    const [toggle, setToggle] = useState({ button: '', icon: true });

    const handleEdit = data => {
        const { type, content, id } = data;
        handleInputField({ ...InputField, field2: type });
        if (type === 'h1') setUpdateData({ ...updateData, heading: content });
        else if (type === 'h3') setUpdateData({ ...updateData, subheading: content });
        else setUpdateData({ ...updateData, para: content });
        handleUniqueID({ ...uniqueID, id });
    }

    const handleDelete = data => {
        const res = preview.filter(elem => elem.id !== data);
        setPreview(res);
    }

    const createNewElement = data => {
        const createNew = { type: data.type, content: data.content, id: new Date().getTime().toString() };
        setPreview([...preview, createNew]);
        setToggle({ ...toggle, button: 'false' });
    }

    const handleInput = e => {
        const { name } = e.target;
        const value = e.target.value.trimStart();
        setData({ ...data, [name]: value });
    }

    const handleInput2 = e => {
        const { name } = e.target;
        const value = e.target.value.trimStart();
        setData2({ ...data2, [name]: value });
    }

    const handleInputUpdate = e => {
        const { name } = e.target;
        const value = e.target.value.trimStart();
        setUpdateData({ ...updateData, [name]: value });
        handleUniqueID({ ...uniqueID, updateText: value })
    }

    const saveData = data => {
        if (toggle.icon) {
            if (data === 'h1') {
                if (!data2.newheading) toast.error('Enter valid data', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                else createNewElement({ type: 'h1', content: data2.newheading });
            }
            else if (data === 'h3') {
                if (!data2.newsubheading) toast.error('Enter valid data', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                else createNewElement({ type: 'h3', content: data2.newsubheading });
            }
            else {
                if (!data2.para) toast.error('Enter valid data', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                else createNewElement({ type: 'p', content: data2.para });
            }
            setData2({ newheading: '', newsubheading: '', para: '' });
            handleInputField({ ...InputField, field1: '' });
        } else toast.error('Blog submitted already', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const generateInputField = data => {
        if (data === 'h1') handleInputField({ ...InputField, field1: 'h1' });
        else if (data === 'h3') handleInputField({ ...InputField, field1: 'h3' });
        else handleInputField({ ...InputField, field1: 'p' });
    }

    const editData = () => {
        const result = preview.map(elem => {
            if (elem.id === uniqueID.id) return { ...elem, content: uniqueID.updateText }
            else return elem;
        });
        handleInputField({ ...InputField, field2: '' });
        setPreview(result);
    }

    const postData = async url => {
        const { heading, blog, category } = data;
        if (!heading || !blog || !category) {
            toast.error('Enter valid data', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setToggle({ button: 'false', icon: true });
        }
        else {
            try {
                const res = await axios.post(url, { type: 'post', data });
                if (res) toast.success(res.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } catch (err) {
                toast.error(err.response.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        if (heading && blog && category) {
            setData({ ...data, heading: '', blog: '', category: '' });
            setPreview([]);
            setToggle({ button: '', icon: true });
        }
    }

    const handlePost = () => {
        let blogString = '';
        preview.map(elem => {
            if (elem.type === 'h1') blogString = blogString.concat(`<h1>${elem.content}</h1>`);
            else if (elem.type === 'h3') blogString = blogString.concat(`<h3>${elem.content}</h3>`);
            else if (elem.type === 'p') blogString = blogString.concat(`<p>${elem.content}</p>`);
            return elem;
        });
        setData({ ...data, blog: blogString });
        setToggle({ button: 'true', icon: false });
    }

    const item = [{ for: 'edu', data: 'Education', id: 'edu', val: 'edu', check: data.category === 'edu', inputData: handleInput }, { for: 'other', data: 'Other', id: 'other', val: 'other', check: data.category === 'other', inputData: handleInput }];

    return (
        <>
            <div className="post-blog-container">
                <h1><span>P</span>ost <span>B</span>log</h1>
                <div className="post-blog-content-container">
                    <label>Enter blog title</label>
                    <input type="text" name='heading' placeholder='Enter blog title here...' value={data.heading} onChange={handleInput} />
                    <div className="category-radio-container">
                        <label>Category : </label>
                        {item.map((val, ind) => <div key={ind}>
                            <input type="radio" name="category" id={val.id} value={val.val} checked={val.check} onChange={val.inputData} />
                            <label htmlFor={val.for}>{val.data}</label>
                        </div>)}
                    </div>
                    <div className="tag-button-container">
                        <button onClick={() => generateInputField('h1')}>Create heading</button>
                        <button onClick={() => generateInputField('h3')}>Create subheading</button>
                        <button onClick={() => generateInputField('p')}>Create paragraph</button>
                    </div>
                    {InputField.field1 === 'h1' ? <input type="text" name='newheading' value={data2.newheading} onChange={handleInput2} placeholder='Enter heading...' /> : InputField.field1 === 'h3' ? <input type="text" name='newsubheading' value={data2.newsubheading} onChange={handleInput2} placeholder='Enter subheading...' /> : InputField.field1 === 'p' ? <textarea name="para" cols="100" rows="10" value={data2.para} onChange={handleInput2} placeholder=' Enter paragraph...'></textarea> : ''}
                    {InputField.field1 ? <button onClick={() => saveData(InputField.field1)}>Next</button> : ''}

                    {InputField.field2 === 'h1' ? <input type="text" name="heading" value={updateData.heading} onChange={handleInputUpdate} placeholder='update heading...' /> : InputField.field2 === 'h3' ? <input type="text" name="subheading" value={updateData.subheading} onChange={handleInputUpdate} placeholder='update subheading...' /> : InputField.field2 === 'p' ? <textarea name="para" cols="100" rows="10" value={updateData.para} onChange={handleInputUpdate} placeholder=' update paragraph...'></textarea> : ''}
                    {InputField.field2 ? <button onClick={editData}>Update</button> : ''}
                    <hr />
                    {preview[0] ? <h1><span>P</span>review</h1> : ''}
                    <div className="blog-preview-container">
                        {preview.map((elem, indx) => {
                            return elem.type === 'h1' ? <div className="tags-div" key={indx}>
                                <h1>{elem.content}</h1>
                                {toggle.icon ? <div>
                                    <button onClick={() => handleEdit({ type: elem.type, content: elem.content, id: elem.id })}><i className='far fa-edit add-btn'></i></button>
                                    <button onClick={() => handleDelete(elem.id)}><i className='far fa-trash-alt add-btn'></i></button>
                                </div> : ''}
                            </div> : elem.type === 'h3' ? <div className="tags-div" key={indx}>
                                <h3>{elem.content}</h3>
                                {toggle.icon ? <div>
                                    <button onClick={() => handleEdit({ type: elem.type, content: elem.content, id: elem.id })}><i className='far fa-edit add-btn'></i></button>
                                    <button onClick={() => handleDelete(elem.id)}><i className='far fa-trash-alt add-btn'></i></button>
                                </div> : ''}
                            </div> : elem.type === 'p' ? <div className="tags-div" key={indx}>
                                <p>{elem.content}</p>
                                {toggle.icon ? <div>
                                    <button onClick={() => handleEdit({ type: elem.type, content: elem.content, id: elem.id })}><i className='far fa-edit add-btn'></i></button>
                                    <button onClick={() => handleDelete(elem.id)}><i className='far fa-trash-alt add-btn'></i></button>
                                </div> : ''}
                            </div> : ''
                        })}
                    </div>
                </div>
                {toggle.button === 'false' ? <button onClick={handlePost}>Submit</button> : toggle.button === 'true' ? <button onClick={() => postData(`${API}/blogs`)}>Post Now</button> : ''}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default PostBlogs;