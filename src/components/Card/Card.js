import React from 'react';
import { useNavigate } from "react-router-dom";

import './Card.scss';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const viewDetails = (type, name) => {
    navigate(`/series/${type}/${name}`)
  }

  return (
    <>
      {
        data.type === "movie" ?
          <div className="row__poster" >
            <a href={data.movieUrl} >
              <img src={data.posterUrl} />
            </a>
          </div>
          :
          <div className="row__poster" >
            <a onClick={() => viewDetails(data.type, data.name)}  >
              <img src={data.posterUrl} />
            </a>
          </div>
      }
    </>
  );
};

export default Card;