import React, { useState } from 'react';
import AddCollege2 from './AddCollege2';

const AddCollege = () => {

    const [data, setData] = useState({ college: '', course: '', fee: '', city: '', state: '', logo: '', link: '' });

    const handleInput = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = () => {
        console.log(data);
    }

    const item = [{ data: 'Enter college name', name: 'college', value: data.college, ph: 'Enter your college name here....', inputData: handleInput }, { data: 'Enter course', name: 'course', value: data.course, ph: 'Enter course name here....', inputData: handleInput }, { data: 'Enter fee for above course', name: 'fee', value: data.fee, ph: 'Enter fee here....', inputData: handleInput }, { data: 'Enter city name', name: 'city', value: data.city, ph: 'Enter city name here....', inputData: handleInput }, { data: 'Enter state name', name: 'state', value: data.state, ph: 'Enter state name here....', inputData: handleInput }, { data: 'Enter college logo link', name: 'logo', value: data.logo, ph: 'Enter college logo url....', inputData: handleInput }, { data: 'Enter college website', name: 'link', value: data.link, ph: 'Enter college website url....', inputData: handleInput }];

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
        </>
    )
}

export default AddCollege;