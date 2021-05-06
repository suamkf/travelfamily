import React from 'react';
import { Link } from 'react-router-dom';

const OfferItem = ({ info, style_class }) => {
  return (
    <div className={style_class}>
      <Link to={info.url}>
        <img className="offer-item-image" src={info.image} />
      </Link>
    </div>
  );
};

export default OfferItem;
