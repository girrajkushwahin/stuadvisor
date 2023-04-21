import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = 'http://127.0.0.1:8000';

const PostAcademics = ({ resp }) => {
    const [data, setData] = useState({ title: '', content: '', file: '' });

    const PostAcademics = async (url, formData) => {
        try {
            const res = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
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

    const handleSubmit = e => {
        e.preventDefault();
        const { title, content, file } = data;
        const token = localStorage.getItem('jwtoken');
        if (!title || !content) toast.error('Enter valid data', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        else if (!file) toast.error('Please select file', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        else {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);
            formData.append('file', data.file);
            formData.append('token', token);
            PostAcademics(`${API}/academics`, formData);
            setData({ title: '', content: '', file: '' });
        }
    }

    const handleChange = e => {
        const { name, value, files } = e.target;
        if (name === 'file') setData({ ...data, file: files[0] });
        else setData({ ...data, [name]: value });
    }

    return (
        <>
            <div className="post-accademics-container">
                <div className="h1-div">
                    <h1><span>P</span>ost <span>S</span>tudy <span>M</span>aterial</h1>
                </div>
                <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
                    <div className="post-accademics-input-container">
                        <label>Enter your name</label>
                        <input name="name" readOnly defaultValue={resp.name} type="text" />
                        <label>Enter notes title</label>
                        <input name="title" value={data.title} onChange={handleChange} type="text" placeholder='Enter title' />
                        <label>Describe about your content</label>
                        <input name="content" type="text" value={data.content} onChange={handleChange} placeholder='Describe content' />
                        <label>Upload file</label>
                        <input name="file" type="file" onChange={handleChange} className='file-input' />
                        <div>
                            <button type='submit'>submit</button>
                        </div>
                    </div>
                </form>
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

export default PostAcademics;