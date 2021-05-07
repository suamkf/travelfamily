import React from 'react';

import OfferItem from './OfferItem';

const info = [
  {
    id: 1,
    url: '',
    image:
      'http://mariacarolinamirabal.com/wp-content/uploads/2020/05/plaza-espana-sevilla_20333351_20200107162131.jpg',
  },
  {
    id: 2,
    url: '',
    image:
      'https://cypes.grupoeurohispana.com/img/articulos_facebook/ALEMANIA.jpg',
  },
  {
    id: 3,
    url: '',
    image:
      'http://mariacarolinamirabal.com/wp-content/uploads/2020/05/plaza-espana-sevilla_20333351_20200107162131.jpg',
  },
  {
    id: 4,
    url: '',
    image:
      'https://cypes.grupoeurohispana.com/img/articulos_facebook/ALEMANIA.jpg',
  },
  {
    id: 5,
    url: '',
    image:
      'http://mariacarolinamirabal.com/wp-content/uploads/2020/05/plaza-espana-sevilla_20333351_20200107162131.jpg',
  },
  {
    id: 6,
    url: '',
    image:
      'https://cypes.grupoeurohispana.com/img/articulos_facebook/ALEMANIA.jpg',
  },
];

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
        <OfferItem
          info={info[0]}
          style_class={'offer-item-container offer-item-container2'}
        />
        <OfferItem
          info={info[1]}
          style_class={'offer-item-container offer-item-container2'}
        />
        <OfferItem
          info={info[2]}
          style_class={'offer-item-container offer-item-container2'}
        />
        <OfferItem
          info={info[3]}
          style_class={'offer-item-container offer-item-container2'}
        />
        <OfferItem
          info={info[4]}
          style_class={'offer-item-container'}
          big_height={true}
        />
        <OfferItem
          info={info[5]}
          style_class={'offer-item-container'}
          big_height={true}
        />
      </div>
    </div>
  );
};

export default IndexInfo;
