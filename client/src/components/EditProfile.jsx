import React from 'react'
// const item = [{ data: 'Full Name', ph: 'Enter full name', typ: 'text', name: 'name', val: data.name, inputData: handleInput, validation: validation.name }, { data: 'Email', ph: 'Enter your email', typ: 'email', name: 'email', val: data.email, inputData: handleInput, validation: validation.email }, { data: 'Password', ph: 'Enter password', typ: 'password', name: 'password', val: data.password, inputData: handleInput, validation: validation.password }, { data: 'Phone Number', ph: 'Enter phone number', typ: 'tel', name: 'number', val: data.number, inputData: handleInput, validation: validation.number }, { data: 'Username', ph: 'Enter username', typ: 'text', name: 'username', val: data.username, inputData: handleInput, validation: validation.username }, { data: 'Confirm password', ph: 'Confirm password', typ: 'password', name: 'cpassword', val: data.cpassword, inputData: handleInput, validation: validation.cpassword }];

// const item2 = [{ for: 'male', data: 'Male', id: 'male', val: 'male', check: data.gender === 'male', inputData: handleInput }, { for: 'female', data: 'Female', id: 'female', val: 'female', check: data.gender === 'female', inputData: handleInput }, { for: 'other', data: 'Other', id: 'other', val: 'other', check: data.gender === 'other', inputData: handleInput }]
import profileLogo from '../images/boy-profile.png'
const EditProfile = () => {
    return (
        <>
            <div className="edit-profile-container">
                <div className="edit-profile">
                    <div className="profile-logo-container">
                        <img src={profileLogo} alt="" />
                        <div className="profile-data">
                            <h1>Gopal Kushwah</h1>
                            <p>Registered User</p>
                        </div>
                    </div>
                    <div className="edit-data-form">
                        <div className="input-container">
                            <label htmlFor="">Edit Name</label>
                            <input type="text" placeholder='Enter your name ' />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Edit Phone Number</label>
                            <input type="text" placeholder='Edit Phone Number ' />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Edit Username</label>
                            <input type="text" placeholder='Edit name ' />
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Edit Email</label>
                            <input type="text" placeholder='Edit name ' />
                        </div>

                    </div>
                    <div className="radio-container">
                        <label htmlFor="">Edit Gender : </label>
                        <input type="radio" name="gender" />
                        <label htmlFor="">Male</label>
                        <input type="radio" name="gender" />
                        <label htmlFor="">Female</label>
                        <input type="radio" name="gender" />
                        <label htmlFor="">Others</label>
                    </div>
                    <div className="save-first-btn-box">
                        <button>Save Info</button>
                    </div>
                </div>

            </div>
            <div className="edit-profile-container pass-profile-container">
                <h1><span>E</span>dit <span>P</span>assword</h1>
                <div className="edit-password">
                    <label htmlFor="">Old Password</label>
                    <input type="password" name="oldpass" placeholder='Enter your old password' />

                    <label htmlFor="">New Password</label>
                    <input type="password" name="newpass" placeholder='Enter new password' />

                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confpass" placeholder='Confirm password' />

                </div>
                <div className="save-first-btn-box">
                    <button>Change password</button>
                </div>
            </div>
            <div className="save-first-btn-box logout-from-all">
                <button>Log Out All Devices</button>
            </div>
        </>
    )
}

export default EditProfile;