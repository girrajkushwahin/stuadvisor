import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCollege2 from './AddCollege2';
const API = 'http://127.0.0.1:8000';

const AddCollege = () => {

    const [data, setData] = useState({ college: '', course: '', fee: '', city: '', state: '', logo: '', link: '' });

    const handleInput = e => {
        const { name } = e.target;
        const value = e.target.value.trimStart();
        setData({ ...data, [name]: value });
    }

    const addCollegeData = async url => {
        try {
            const res = await axios.post(url, data);
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
        const { college, course, fee, city, state, logo, link } = data;
        if (!college || !course || !fee || !city || !state || !logo || !link) toast.error('Enter valid data', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        else {
            addCollegeData(`${API}/addcollege`);
            setData({ college: '', course: '', fee: '', city: '', state: '', logo: '', link: '' });
        }
    }

    const item = [{ data: 'Enter college name', name: 'college', value: data.college, ph: 'Enter your college name here....', inputData: handleInput }, { data: 'Enter course', name: 'course', value: data.course, ph: 'Enter one course at a time', inputData: handleInput }, { data: 'Enter fee for above course', name: 'fee', value: data.fee, ph: 'Enter fee here....', inputData: handleInput }, { data: 'Enter city name', name: 'city', value: data.city, ph: 'Enter city name here....', inputData: handleInput }, { data: 'Enter state name', name: 'state', value: data.state, ph: 'Enter state name here....', inputData: handleInput }, { data: 'Enter college logo link', name: 'logo', value: data.logo, ph: 'Enter college logo url....', inputData: handleInput }, { data: 'Enter college website', name: 'link', value: data.link, ph: 'without https and www', inputData: handleInput }];

    return (
        <>
            <div className="add-clg-container">
                <h1> <span>A</span>dd <span>Y</span>our <span>C</span>ollege</h1>
                <p>To build our community more strong , Please Help others to know about your college</p>
                <div className="add-clg-input-container">
                    {item.map((value, index) => <AddCollege2 {...value} key={index} />)}
                    <div className="add-clg-btn-container">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
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

export default AddCollege;