import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Row from '../Row/Row';
import hindiMovies from '../Data/hindiMovies.json';
import hollywoodMovies from '../Data/hollywoodMovies.json';
import spanishSeries from '../Data/spanishSeries.json'
import germanSeries from '../Data/germanSeries.json'
import koreanSeries from '../Data/koreanSeries.json'

import './HomeScreen.scss';

const HomeScreen = () => {
  return (
    <main className='homeScreen'>
      <Nav />
      <Banner />
      <Row title='Hindi Movies' data={hindiMovies} />
      <Row title='Hollowood Movies' data={hollywoodMovies} />
      <Row title='Spanish Series' data={spanishSeries} />
      <Row title='German Series' data={germanSeries} />
      <Row title='Korean Series' data={koreanSeries} />
      <Footer />
    </main>
  );
};

export default HomeScreen;