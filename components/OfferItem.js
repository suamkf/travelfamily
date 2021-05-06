import React from 'react';
import { Link } from 'react-router-dom';

const OfferItem = ({ info }) => {
  return (
    <div className="offer-item-container">
      <Link to={info.url}>
        <img className="offer-item-image" src={info.image} />

        <div className="offer-item-descrition">{info.description}</div>
      </Link>
    </div>
  );
};

export default OfferItem;
