import React from 'react';

import Card from '../Card/Card';
import './Row.scss'

const Row = ({ title, data, type }) => {
  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className="row__posters"> {data.map((d, i) => <Card data={d} key={i} />)}</div>
    </section>
  );
};

export default Row;