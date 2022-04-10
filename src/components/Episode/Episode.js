import React from 'react';

import './Episode.scss';

const Episode = ({ name, link }) => {
  return (
    <a className="episode" href={link}>{name}</a>
  );
};

export default Episode;