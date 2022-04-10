import React from 'react';

import Card from '../Card/Card';
import './Row.scss'

const Row = ({ title, data, type }) => {
  return (
    <section className='row'>
      <h2>{title}</h2>

      {type === 'search' ?
        <div className='search_poster'> <Card data={data} /> </div> : <div className="row__posters"> {data.map((d) => <Card data={d} />)}</div>
      }

    </section>
  );
};

export default Row;