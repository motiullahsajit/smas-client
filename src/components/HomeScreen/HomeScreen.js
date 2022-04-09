import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Row from '../Row/Row';
import hindiMovies from '../Data/hindiMovies.json';
import hollywoodMovies from '../Data/hollywoodMovies.json';

import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <main className='homeScreen'>
      <Nav />
      <Banner />
      <Row title='Hindi Movies' movies={hindiMovies} />
      <Row title='Hollowood Movies' movies={hollywoodMovies} />
      <Footer />
    </main>
  );
};

export default HomeScreen;