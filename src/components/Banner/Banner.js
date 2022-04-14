import React, { useEffect, useState } from 'react';

import movie from '../Data/bannerMovies.json';

import './Banner.scss';

const Banner = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    setI(random)
  }, [])
  return (
    <header style={{ backgroundImage: `url('${movie[i]?.backgroundImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }} className='banner'>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie[i]?.name}
        </h1>
        <div className="banner__buttons">
          <a href={movie[i].movieUrl} className='banner__button'>Play</a>
        </div>
        <h1 className="banner__description">
          {movie[i].overview}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;