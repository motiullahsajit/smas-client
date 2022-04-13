import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import './Auth.scss';

const Auth = () => {
  document.title = 'Login';
  const navigate = useNavigate();
  const [option, setOption] = useState('signUp');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({});
  const [profileImgURl, setProfileImgURl] = useState(null);
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfrimPassword] = useState('')

  const navigateTo = (route) => {
    navigate(`/${route}`)
  }

  const handleImageUpload = async (event) => {
    const imageData = new FormData();
    imageData.set('key', 'ea5f66854b1d86a62785b81c38b625d0');
    imageData.append('image', event.target.files[0]);

    await axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setProfileImgURl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (option === 'signUp') {
      if (password === confirmPassword && profileImgURl) {
        const variables = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          subExpirationDate: moment(new Date(), "DD-MM-YYYY").add(3, 'days'),
          imageUrl: profileImgURl
        }
        await axios.post(`${process.env.REACT_APP_API_URL}user/register`, variables)
          .then(response => {
            if (response.data.success === true) {
              localStorage.setItem('smasuserId', response.data.user._id)
              localStorage.setItem('smasemail', response.data.user.email)
              localStorage.setItem('smasimageUrl', response.data.user.imageUrl)
              navigate(`/home`)
            }

          }).catch(error => { setError(error) })
        setError('')
      }
      else {
        setError('Your passwords didnot matched')
      }
    }
    if (option === 'login') {
      const variables = {
        email: formData.email,
        password: formData.password,
      }
      await axios.post(`${process.env.REACT_APP_API_URL}user/login`, variables)
        .then(response => {
          if (response.data.success === true) {
            localStorage.setItem('smasuserId', response.data.user._id)
            localStorage.setItem('smasemail', response.data.user.email)
            localStorage.setItem('smasimageUrl', response.data.user.imageUrl)
            navigate(`/home`)
          }
          else {
            setError(response.data.message)
          }
        }).catch(error => { setError(error) })
    }
  }


  return (
    <main className='auth_bg'>
      <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
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
            <>
              <input name="confirmPassword" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Confirm Password" className="form_input" required />
              <label>Upload Profile Picture</label>
              <input name="profileImgURl" type="file" onChange={handleImageUpload} placeholder="Profile Picture" className="form_input" required />
            </>
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