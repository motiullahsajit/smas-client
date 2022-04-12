import React from 'react';

import movie from './bannerMovies.json';

import './Banner.scss';

const Banner = () => {

  return (
    <header style={{ backgroundImage: `url('${movie?.backgroundImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }} className='banner'>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name}
        </h1>
        <div className="banner__buttons">
          <a href={movie.movieUrl} className='banner__button'>Play</a>
        </div>
        <h1 className="banner__description">
          {movie.overview}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;