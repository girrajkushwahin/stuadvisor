import React from 'react'

const AddCollege = () => {
    return (
        <>
            <div className="add-clg-container">
                <h1> <span>A</span>dd <span>Y</span>our <span>C</span>ollege</h1>
                <p>To build our community more strong , Please Help others to know about your college</p>
                <div className="add-clg-input-container">
                    <label htmlFor="">Enter college name</label>
                    <input type="text" placeholder='Enter your college name here....' />

                    <label htmlFor="">Enter course</label>
                    <input type="text" placeholder='Enter course name here....' />

                    <label htmlFor="">Enter fees for above subject</label>
                    <input type="text" placeholder='Enter yearly fee here....' />

                    <label htmlFor="">Enter city name</label>
                    <input type="text" placeholder='Enter city name here....' />

                    <label htmlFor="">Enter state name</label>
                    <input type="text" placeholder='Enter state name here....' />

                    <label htmlFor="">Enter logo link</label>
                    <input type="text" placeholder='Enter college logo url....' />

                    <label htmlFor="">Enter college link</label>
                    <input type="text" placeholder='Enter college website url....' />

                    <div className="add-clg-btn-container">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCollege;