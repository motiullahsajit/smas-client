import React from 'react';
import { useNavigate } from "react-router-dom";
import AccountMenu from '../Nav/Menu';
import './HomeScreen.scss';

const SubExp = () => {

  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(`/${route}`)
  }
  return (
    <>
      <div className='sub_nav'>
        <h2 onClick={() => navigateTo('')} style={{ color: 'red', fontSize: "2rem", paddingLeft: '2rem', cursor: "pointer" }}>SMAS</h2>
        <AccountMenu />
      </div>
      <section className='sub_exp_container'>
        <div>
          <p>Sorry Your subscription has been expired</p>
          <button onClick={() => navigateTo('subscription')} className='primary_button_sub'>Upgrade Subscription</button>
        </div>
      </section>
    </>
  );
};

export default SubExp;