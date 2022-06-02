import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'
import { useNavigate } from "react-router-dom";

import AccountMenu from '../Nav/Menu';
import './Profile.scss';

const Profile = () => {
  document.title = 'Profile';
  const navigate = useNavigate();
  const [user, setUser] = useState({})

  const navigateTo = (route) => {
    navigate(`/${route}`)
  }

  useEffect(() => {
    const smasuserId = localStorage.getItem('smasuserId');
    axios.post(`${process.env.REACT_APP_API_URL}user/getUser`, { userId: smasuserId })
      .then(response => {
        if (response.data.success === true) {
          const expired = moment(response?.data?.user.subExpirationDate).isAfter(new Date());
          const userInfo = {
            name: response?.data?.user.name,
            email: response?.data?.user.email,
            subscription: expired,
            expirationDate: response?.data?.user.subExpirationDate
          }

          setUser(userInfo);
        }

      }).catch(error => { console.log(error) })
  }, [])


  return (
    <main className='profile_container'>
      <div className='sub_nav'>
        <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
        <AccountMenu />
      </div>
      <section>
        <div className='profile_info'>
          <div>
            <h3>Your Profile</h3>
            <p>Name   : {user.name}</p>
            <p>Email    : {user.email}</p>
            <p>Subscription   : {user.subscription === true ? 'Premium' : 'Free'}</p>
            <p>Expiration Date  : {moment(user.expirationDate).format('DD/MM/YYYY')}</p>
            {
              user.subscription === false && <button onClick={() => navigateTo('subscription')} className='primary_button'>Upgrade To Premium</button>
            }      
                <button onClick={() => navigateTo('')} className='primary_button_sub'>Back To Home</button>
          </div>
        </div>
      </section>
            

    </main>
  );
  
};

export default Profile;