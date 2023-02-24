import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactSlider } from './Data';
const API = 'http://127.0.0.1:8000';

const ContactUs = () => {
  const [sendMsg, setSendMsg] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setSendMsg({ ...sendMsg, [name]: value });
  }

  const sendMessage = async url => {
    try {
      const res = await axios.post(url, sendMsg);
      if (res) {
        setSendMsg({ ...sendMsg, message: '' });
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleData = () => {
    const { name, email, message } = sendMsg;
    if (!name || !email || !message) toast.error('Fill properly', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    else {
      sendMessage(`${API}/getmessage`);
    }
  }

  const userContact = async url => {
    const token = localStorage.getItem('jwtoken');
    try {
      const res = await axios.post(url, { token });
      const { name, email } = res.data;
      setSendMsg({ name, email });
    } catch (err) { }
  }

  useEffect(() => {
    userContact(`${API}/getcontact`);
  }, []);

  return (
    <>
      <div className="contact-container">
        <div className="company-contact contact-margin">
          <h1 className='get-in-touch'> <span>Get</span> in touch</h1><hr className='hr' />
          <div className="company-details">
            <span><h2>Email</h2><p>contact@stuadvisor.com</p></span>
            <span><h2>Phone</h2><p>+91 9876543210</p></span>
            <span><h2>Address</h2><p>Indrapuri, Bhopal (M.P.) </p></span>
          </div>
          <div className="social-icons-contact">
            <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://facebook.com/" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://github.com/" rel="noreferrer" target="_blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <hr />
        <div className="contact-slider contact-margin">
          <div className="top">
            <Carousel>
              {contactSlider.map((val, ind) => <Carousel.Item key={ind}>
                <img
                  className="d-block w-100"
                  src={val.src}
                  alt={val.text}
                />
              </Carousel.Item>)}
            </Carousel>
          </div>
        </div>
        <hr />
        <div className="message-contact-form contact-margin">
          <h1 className='get-in-touch'><span>Send</span> us Message</h1>
          <div className="send-message">
            <form>
              <div className="contact-form">
                <span><h1>Name</h1><input type="text" name='name' value={sendMsg.name} placeholder='Enter name' onChange={handleChange} /></span>
                <span><h1>Email</h1><input type="email" name='email' value={sendMsg.email} placeholder='Enter email' onChange={handleChange} /></span>
              </div>
              <textarea name="message" value={sendMsg.message} cols="116" onChange={handleChange} className="contact-textarea" placeholder='Enter message here...' ></textarea>
            </form>
          </div>
          <div className="send-btn-div">
            <button type='button' className='send-btn' onClick={handleData}>Send Message</button>
          </div>
        </div>
        <hr />
        <div className="contact-form-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.500615116098!2d77.4531487770454!3d23.25672375735795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4206867f624f%3A0xe7a20a45699fb32c!2sIndrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1676395806094!5m2!1sen!2sin" allowFullScreen title='stuadvisor location' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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

export default ContactUs;