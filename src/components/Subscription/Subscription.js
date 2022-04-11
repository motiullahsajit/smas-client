import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Subscription.scss';

const Subscription = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});

  const [password, setPassword] = useState('')

  const onChangeHandler = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
      setPassword(e.target.value)
    }
    if (isFieldValid) {
      const key = e.target.name
      setFormData({ ...formData, [key]: e.target.value })
      setError('')
    }
    else {
      setError('Please check your Email format or Password (password should have more then six character and a number in it)')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.password)
    // if (option === 'signUp') {
    //   if (password === confirmPassword) {
    //     createUserWithEmailAndPassword(formData.name, formData.email, formData.password).then(res => {
    //       handleResponse(res, true)
    //     }).catch(error => { setError(error) })
    //     setError('')
    //   }
    //   else {
    //     setError('Your passwords didnot matched')
    //   }
    // }
    // if (option === 'login') {
    //   signInWithEmailAndPassword(formData.email, formData.password).then(res => {
    //     handleResponse(res, true)
    //   }).catch(error => { setError(error) })
    // }
  }

  const handleResponse = (res, redirect) => {
    // setLoggedInUser(res)
    // redirect && history.replace(from);
  }

  const navigateTo = (route) => {
    navigate(`/${route}`)
  }


  return (
    <main className='auth_bg'>
      <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
      <section className='form_section'>
        <form onSubmit={handleSubmit} className="form">
          <h1 className='sub_form_heading'>Subscription</h1>
          <p>Our monthly subscription price is now only <span className='highlight'>50 BDT</span>. In the celebration of our new website we are giving <span className='highlight'>50% off</span></p>
          <p>To confirm your subscription first send money to our Bkash No <span className='highlight'>017XXXXXXXX</span> and then fill-up the form.</p>
          <p>Thank You</p>
          <input name="name" type="text" onChange={(e) => onChangeHandler(e)} placeholder="Name" className="form_input" required />
          <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form_input" required />
          <input value="25 (BDT)" name="payableamount" onChange={(e) => onChangeHandler(e)} placeholder="Payable Amount" className="form_input" disabled />
          <input name="bkashno" onChange={(e) => onChangeHandler(e)} placeholder="Your Bkash No" className="form_input" required />
          <p className='text_error'>{error}</p>
          <button type="submit" className="primary_button">Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default Subscription;