import React, { useState } from 'react';

import './Auth.scss';

const Auth = () => {

  document.title = 'Login';
  const [option, setOption] = useState('signUp');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = useState('')

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
    if (e.target.name === 'confirmPassword') {
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
      setConfrimPassword(e.target.value)
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


  return (
    <main className='auth_bg'>
      <h2 style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem' }}>SMAS</h2>
      <section className='form_section'>
        <form onSubmit={handleSubmit} className="form">
          {
            option === 'signUp' ? <h1 className='form_heading'>Sign Up</h1> : <h1 className='form_heading'>Sign In</h1>
          }
          {
            option === 'signUp' &&
            <input name="name" type="text" onChange={(e) => onChangeHandler(e)} placeholder="Name" className="form_input" required />
          }
          <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form_input" required />
          <input name="password" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Password" className="form_input" required />
          {
            option === 'signUp' &&
            <input name="confirmPassword" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Confirm Password" className="form_input" required />
          }

          <p className='text_error'>{error}</p>

          {
            option === 'signUp' ?
              <button type="submit" className="primary_button">Sign Up</button>
              :
              <button type="submit" className="primary_button">Sign In</button>
          }

          {
            option === 'signUp' ? <> <p>Already have an account? <span className='text_brand' onClick={() => setOption('login')}>Sign In</span></p></> :
              <> <p>New to SMAS? <span className='text_brand' onClick={() => setOption('signUp')}>Sign Up</span></p></>
          }
        </form>
      </section>
    </main>
  );
};

export default Auth;