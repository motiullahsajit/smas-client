import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment'

import newReleases from '../Data/newReleases.json';
import popularOnSmas from '../Data/hollywoodMovies.json';
import tvShows from '../Data/hollywoodMovies.json';
import hollywoodMovies from '../Data/hollywoodMovies.json';
import bollywoodMovies from '../Data/hollywoodMovies.json';

import Nav from '../Nav/Nav';
import SubExp from './SubExp';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import RowSlider from '../RowSlider/RowSlider';

import './HomeScreen.scss';

const HomeScreen = () => {
  const [subExp, setSubExp] = useState(true);

  const smasuserId = localStorage.getItem('smasuserId');
  axios.post(`${process.env.REACT_APP_API_URL}user/getUser`, { userId: smasuserId })
    .then(response => {
      if (response.data.success === true) {
        const expiration = moment(response?.data?.user.subExpirationDate).isAfter(new Date());
        setSubExp(expiration)
      }

    }).catch(error => { console.log(error) })

  return (
    <main className='homeScreen'>
      {subExp === true ?
        <>
          <Nav />
          <Banner />
          <RowSlider title='New Releases' data={newReleases} />
          <RowSlider title='Popular On SMAS' data={popularOnSmas} />
          <RowSlider title='TV Shows' data={tvShows} />
          <RowSlider title='Hollywood Movies' data={hollywoodMovies} />
          <RowSlider title='Bollywood Movies' data={bollywoodMovies} />
          <Footer />
        </>
        :
        <SubExp />
      }
    </main>
  );
};

export default HomeScreen;