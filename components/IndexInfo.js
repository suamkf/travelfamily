import React from 'react';

import OfferItem from './OfferItem';

const info = {
  url: '',
  image:
    'http://mariacarolinamirabal.com/wp-content/uploads/2020/05/plaza-espana-sevilla_20333351_20200107162131.jpg',
  description:
    'Madrid, Barcelona • 9 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums.',
};

const IndexInfo = () => {
  return (
    <div className="index-info-container">
      <div className="index-info-description">
        <p className="index-info-description-title">
          BEST EXPERIENCE AND PRICE
        </p>
        <p className="index-info-description-subtitle">
          Ower obsetion is give the best family travel experince with the best
          price.
        </p>
        <b>
          <p className="index-info-description-subtitle">
            Please check ower offerts
          </p>
        </b>
      </div>
      <div className="index-info-offer">
        <OfferItem info={info} />
        <OfferItem info={info} />
        <OfferItem info={info} />
        <OfferItem info={info} />
      </div>
    </div>
  );
};

export default IndexInfo;
