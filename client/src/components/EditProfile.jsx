import React from 'react'
// const item = [{ data: 'Full Name', ph: 'Enter full name', typ: 'text', name: 'name', val: data.name, inputData: handleInput, validation: validation.name }, { data: 'Email', ph: 'Enter your email', typ: 'email', name: 'email', val: data.email, inputData: handleInput, validation: validation.email }, { data: 'Password', ph: 'Enter password', typ: 'password', name: 'password', val: data.password, inputData: handleInput, validation: validation.password }, { data: 'Phone Number', ph: 'Enter phone number', typ: 'tel', name: 'number', val: data.number, inputData: handleInput, validation: validation.number }, { data: 'Username', ph: 'Enter username', typ: 'text', name: 'username', val: data.username, inputData: handleInput, validation: validation.username }, { data: 'Confirm password', ph: 'Confirm password', typ: 'password', name: 'cpassword', val: data.cpassword, inputData: handleInput, validation: validation.cpassword }];

// const item2 = [{ for: 'male', data: 'Male', id: 'male', val: 'male', check: data.gender === 'male', inputData: handleInput }, { for: 'female', data: 'Female', id: 'female', val: 'female', check: data.gender === 'female', inputData: handleInput }, { for: 'other', data: 'Other', id: 'other', val: 'other', check: data.gender === 'other', inputData: handleInput }]

const EditProfile = () => {
    return (
        <>
            <div className="edit-profile-container">
                <div className="edit-profile">
                    {/* <div className="right-sign-in">
                        <form method='POST' onSubmit={handleSubmit} className="sign-up-form">
                            <div className="form-container">
                                <div className="left-form">
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />

                                </div>
                                <div className="right-form">
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
                                    <label className='sign-in-tags lables'>{data}</label>
                                    <input className='sign-in-tags input-sign' placeholder={ph} type={typ} name={name} value={val} onChange={inputData} required />
                                </div>
                            </div>
                            <div className="gender-container">
                                <h1 className=''>Select your gender</h1>
                                {item2.map((value, ind) => {
                                    return <div key={ind}>
                                        <label className='radio-btn gender-lable' htmlFor={value.for}>{value.data}</label>
                                        <input className='radio-btn' name="gender" type="radio" id={value.id} value={value.val} checked={value.check} onChange={value.inputData} required />
                                    </div>
                                })}
                            </div>
                            <div className="btn-div">
                                <button type='submit' className="sign-up-btn">Register</button>
                            </div>
                        </form>
                    </div> */}
                </div>
                <div className="edit-password">

                </div>
                <div className="logout-btn-container">
                    <button >Log out from all devices</button>
                </div>
            </div>
        </>
    )
}

export default EditProfile;