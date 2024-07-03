import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = process.env.REACT_APP_API;

const PostReview = ({ resp }) => {
    const [data, setData] = useState({ name: resp.name, review: '', stars: '' });

    const handleInput = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const sendReview = async url => {
        try {
            const res = await axios.post(url, { data, type: 'post' });
            if (res) toast.success(res.data.message, {
                position: "top-center",
                autoClose: 1000,
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
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleSubmit = () => {
        sendReview(`${API}/reviews`);
        setData({ ...data, review: '', stars: '' });
    }

    const item = [{ for: '1star', data: '⭐', id: '1star', val: '1 star', check: data.stars === '1 star', inputData: handleInput }, { for: '2star', data: '⭐⭐', id: '2star', val: '2 stars', check: data.stars === '2 stars', inputData: handleInput }, { for: '3star', data: '⭐⭐⭐', id: '3star', val: '3 stars', check: data.stars === '3 stars', inputData: handleInput }, { for: '4star', data: '⭐⭐⭐⭐', id: '4star', val: '4 stars', check: data.stars === '4 stars', inputData: handleInput }, { for: '5star', data: '⭐⭐⭐⭐⭐', id: '5star', val: '5 stars', check: data.stars === '5 stars', inputData: handleInput }];

    return (
        <>
            <div className="post-reviews-inner">
                <div className="h1-div">
                    <h1><span>P</span>ost <span>R</span>eviews</h1>
                </div>
                <div className="post-revies-container">
                    <h1>Your <span>Reviews</span>  are important to develop our community more strong . Reviews help people to know more about us</h1>
                    <hr />
                    <div className="post-revies-input-container">
                        <label>Enter your name :</label>
                        <input className='your-name' type="text" name='name' placeholder='Enter your name...' readOnly defaultValue={resp.name} />
                        <label>Enter your review :</label>
                        <textarea name="review" cols="5" rows="10" value={data.review} onChange={handleInput} placeholder='Enter reviews here...'></textarea>
                        <div className="rating">
                            <label>Give us stars -</label>
                            <div className="input-rating-div">
                                {item.map((elem, indx) => <div key={indx}>
                                    <input type="radio" name='stars' value={elem.val} id={elem.id} checked={elem.check} onChange={elem.inputData} />
                                    <label htmlFor={elem.for}>{elem.data}</label>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="save-first-btn-box logout-from-all">
                    <button onClick={handleSubmit}>Post Review</button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
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

export default PostReview;