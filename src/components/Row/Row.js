import React from 'react';

import Card from '../Card/Card';
import './Row.scss'

const Row = ({ title, movies }) => {
  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {
          movies.map((m) => <Card imgUrl={m.imgUrl} movieUrl={m.movieUrl} />)
        }
      </div>
    </section>
  );
};

export default Row;