import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AccountMenu from '../Nav/Menu';

import './Subscription.scss';

const Subscription = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});
  const [confirmation, setConfirmation] = useState(false);

  const navigateTo = (route) => {
    navigate(`/${route}`)
  }

  const onChangeHandler = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (isFieldValid) {
      const key = e.target.name
      setFormData({ ...formData, [key]: e.target.value })
      setError('')
    }
    else {
      setError('Please check your Email format')
    }
  }

  const handleSubmit = async (e) => {
    const userId = localStorage.getItem('smasuserId');
    e.preventDefault();
    if (formData) {
      const variables = {
        userId: userId,
        name: formData.name,
        email: formData.email,
        bkashNo: formData.bkashNo,
      }
      await axios.post(`${process.env.REACT_APP_API_URL}user/subscription`, variables)
        .then(response => {
          if (response.data.success === true) {
            setConfirmation(true)
          }
        }).catch(error => { setError(error) })
    }
  }


  return (
    <main className='auth_bg'>
      <div className='sub_nav'>
        <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
        <AccountMenu />
      </div>
      <section className='form_section'>
        <form onSubmit={handleSubmit} className="form">
          {confirmation === false ? <>
            <h1 className='sub_form_heading'>Subscription</h1>
            <p>Our monthly subscription price is now only <span className='highlight'>50 BDT</span>. In the celebration of our new website we are giving <span className='highlight'>50% off</span></p>
            <p>To confirm your subscription first send money to our Bkash No <span className='highlight'>017XXXXXXXX</span> and then fill-up the form.</p>
            <p>Thank You</p>
            <input name="name" type="text" onChange={(e) => onChangeHandler(e)} placeholder="Name" className="form_input" required />
            <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form_input" required />
            <input value="25 (BDT)" name="payableamount" onChange={(e) => onChangeHandler(e)} placeholder="Payable Amount" className="form_input" disabled />
            <input name="bkashNo" onChange={(e) => onChangeHandler(e)} placeholder="Your Bkash No" className="form_input" required />
            <p className='text_error'>{error}</p>
            <button type="submit" className="primary_button">Subscribe</button>
          </> :
            <p className='confirmation_text'>
              Thank You for your request to upgrade your subscription, You will be notified about the activation within a very short time by your email.
            </p>
          }
        </form>
      </section>
    </main>
  );
};

export default Subscription;