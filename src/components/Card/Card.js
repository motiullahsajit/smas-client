import React from 'react';

import './Card.scss';

const Card = ({ imgUrl, movieUrl }) => {
  return (
    <div className="row__poster" >
      <a href={movieUrl} target="_blank">
        <img src={imgUrl} />
      </a>
    </div>
  );
};

export default Card;