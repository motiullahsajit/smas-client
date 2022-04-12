import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import allData from '../Data/allData.json';
import hindiMovies from '../Data/hindiMovies.json';
import hollywoodMovies from '../Data/hollywoodMovies.json';
import spanishSeries from '../Data/spanishSeries.json';
import germanSeries from '../Data/germanSeries.json';
import koreanSeries from '../Data/koreanSeries.json';

import './HomeScreen.scss';
import RowSlider from '../RowSlider/RowSlider';

const HomeScreen = () => {
  return (
    <main className='homeScreen'>
      <Nav />
      <Banner />
      <RowSlider title='Hindi Movies' data={allData} />
      <RowSlider title='Hollowood Movies' data={allData} />
      <RowSlider title='Spanish Series' data={allData} />
      <RowSlider title='German Series' data={allData} />
      <RowSlider title='Korean Series' data={allData} />
      <Footer />
    </main>
  );
};

export default HomeScreen;