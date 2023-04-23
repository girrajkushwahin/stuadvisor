import React, { useState, useContext } from "react";
import { SignOut } from "../App";
import axios from "axios";
import profileLogo from "../images/boy-profile.png";
import profileLogo2 from "../images/girl-profile.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API = "http://127.0.0.1:8000";

const EditProfile = ({ resp }) => {
    const [data, getData] = useState({
        name: resp.name,
        email: resp.email,
        number: resp.number,
        username: resp.username,
        gender: resp.gender,
    });
    const [data2, getData2] = useState({
        curpass: "",
        newpass: "",
        cnewpass: "",
    });
    const [validation, setValidation] = useState({
        name: {},
        email: {},
        curpass: {},
        newpass: {},
        number: {},
        username: {},
    });
    const handleSignOut = useContext(SignOut);
    const [styleVal] = useState({
        successStyle: { borderBottom: "3px solid green" },
        errStyle: { borderBottom: "3px solid red" },
    });

    const updateProfile = async (url) => {
        const token = localStorage.getItem("jwtoken");
        try {
            const res = await axios.post(url, { data, token });
            if (res)
                toast.success(res.data.message, {
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
    };

    const updatePassword = async (url) => {
        const token = localStorage.getItem("jwtoken");
        try {
            const res = await axios.post(url, { data2, token });
            if (res)
                toast.success(res.data.message, {
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
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        formValidation(name, value);
        getData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const handleInputPassword = (e) => {
        const { name, value } = e.target;
        formValidation(name, value);
        getData2((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const item2 = [
        {
            for: "male",
            data: "Male",
            id: "male",
            val: "male",
            check: data.gender === "male",
            inputData: handleInput,
        },
        {
            for: "female",
            data: "Female",
            id: "female",
            val: "female",
            check: data.gender === "female",
            inputData: handleInput,
        },
        {
            for: "other",
            data: "Other",
            id: "other",
            val: "other",
            check: data.gender === "other",
            inputData: handleInput,
        },
    ];

    const handleProfile = () => {
        const { name, email, number, username } = validation;
        const { errStyle } = styleVal;
        if (data.name && data.email && data.number && data.username) {
            if (
                name.borderBottom === errStyle.borderBottom ||
                email.borderBottom === errStyle.borderBottom ||
                number.borderBottom === errStyle.borderBottom ||
                username.borderBottom === errStyle.borderBottom
            )
                toast.error("Enter valid data", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            else updateProfile(`${API}/updateprofile`);
        } else
            toast.error("Enter valid data", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    };

    const handlePassword = () => {
        const { errStyle } = styleVal;
        const { curpass, newpass, cnewpass } = data2;
        if (curpass && newpass && cnewpass) {
            if (
                validation.curpass.borderBottom === errStyle.borderBottom ||
                validation.newpass.borderBottom === errStyle.borderBottom
            )
                toast.error("Enter valid data", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            else if (newpass !== cnewpass)
                toast.error("Password not matching", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            else updatePassword(`${API}/changepassword`);
        } else
            toast.error("Enter valid data", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        getData2({ curpass: "", newpass: "", cnewpass: "" });
    };

    const handleSecurity = async () => {
        try {
            const res = await axios.post(`${API}/logoutall`, { data: resp.username });
            if (res) {
                handleSignOut();
            }
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
    };

    const nameReg = /^[a-zA-Z][a-zA-Z ]{2,29}$/;
    // eslint-disable-next-line
    const mailReg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    // eslint-disable-next-line
    const passReg = /^[-a-zA-Z0-9\.\*\?\^\$ `~+/\\|=_)(&%#@!,<>:;'"\]\[}{]{8,25}$/;
    const numReg = /^[6789]([0-9]){9}$/;
    // eslint-disable-next-line
    const usrnameReg = /^[a-z_0-9]([a-z0-9\._]){3,25}$/;

    const formValidation = (name, value) => {
        if (name === "name") {
            if (nameReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        } else if (name === "email") {
            if (mailReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        } else if (name === "curpass") {
            if (passReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        } else if (name === "newpass") {
            if (passReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        } else if (name === "number") {
            if (numReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        } else if (name === "username") {
            if (usrnameReg.test(value))
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        }
        if (name === "cnewpass") {
            if (data2.newpass === value)
                setValidation({ ...validation, [name]: { ...styleVal.successStyle } });
            else setValidation({ ...validation, [name]: { ...styleVal.errStyle } });
        }
    };

    return (
        <>
            <div className="edit-profile-container">
                <div className="edit-profile">
                    <div className="profile-logo-container">
                        {data.gender === "female" ? <img src={profileLogo2} alt="girl-img" /> : <img src={profileLogo} alt="boy-img" />}
                        <div className="profile-data">
                            <h1>{data.name}</h1>
                            <p>Registered User</p>
                        </div>
                    </div>
                    <div className="edit-data-form">
                        <div className="input-container">
                            <label>Edit Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={data.name}
                                onChange={handleInput}
                                style={validation.name}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Edit Number</label>
                            <input
                                type="text"
                                placeholder="Edit your number"
                                name="number"
                                value={data.number}
                                onChange={handleInput}
                                style={validation.number}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Edit Username</label>
                            <input
                                type="text"
                                placeholder="Edit username"
                                name="username"
                                value={data.username}
                                onChange={handleInput}
                                style={validation.username}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Edit Email</label>
                            <input
                                type="text"
                                placeholder="Edit your email"
                                name="email"
                                value={data.email}
                                onChange={handleInput}
                                style={validation.email}
                                required
                            />
                        </div>
                    </div>
                    <div className="radio-container">
                        <label>Edit Gender : </label>
                        {item2.map((value, indx) => <div key={indx}>
                            <input
                                type="radio"
                                name="gender"
                                id={value.id}
                                value={value.val}
                                checked={value.check}
                                onChange={value.inputData}
                            />
                            <label htmlFor={value.for}>{value.data}</label>
                        </div>
                        )}
                    </div>
                    <div className="save-first-btn-box">
                        <button onClick={handleProfile}>Save Info</button>
                    </div>
                </div>
            </div>
            <div className="edit-profile-container pass-profile-container">
                <h1>
                    <span>C</span>hange <span>P</span>assword
                </h1>
                <div className="edit-password">
                    <label>Current Password</label>
                    <input
                        type="password"
                        name="curpass"
                        value={data2.curpass}
                        onChange={handleInputPassword}
                        style={validation.curpass}
                        placeholder="Enter current password"
                    />

                    <label>New Password</label>
                    <input
                        type="password"
                        name="newpass"
                        value={data2.newpass}
                        onChange={handleInputPassword}
                        style={validation.newpass}
                        placeholder="Enter new password"
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="cnewpass"
                        value={data2.cnewpass}
                        onChange={handleInputPassword}
                        style={validation.cnewpass}
                        placeholder="Confirm password"
                    />
                </div>
                <div className="save-first-btn-box">
                    <button onClick={handlePassword}>Change Password</button>
                </div>
            </div>
            <div className="save-first-btn-box logout-from-all">
                <button onClick={handleSecurity}>Sign Out All Devices</button>
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
    );
};

export default EditProfile;
