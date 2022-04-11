import React from 'react';
import { useNavigate } from "react-router-dom";

import './Profile.scss';

const Profile = () => {
  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(`/${route}`)
  }
  return (
    <main className='profile_container'>
      <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
      <section>
        <div className='profile_info'>
          <div>
            <h3>Your Profile</h3>
            <p>Name   :</p>
            <p>Email    : </p>
            <p>Subscription   : </p>
            <p>Expiration Date  : </p>
            <button onClick={() => navigateTo('subscription')} className='primary_button'>Upgrade To Premium</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;