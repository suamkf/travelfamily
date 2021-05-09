import React, { useEffect } from 'react';

import OfferItem from './OfferItem';
import { v4 as uuidv4 } from 'uuid';

const IndexInfo = ({ posiblePlaces, disableSearch, getUserData }) => {
  const info = [
    {
      id: 1,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'EZE',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'Buenos Aires',
      url: '',
      image:
        'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/24123559/Buenos-Aires.jpg',
    },
    {
      id: 2,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'GIG',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'Rio de Janeiro',
      url: '',
      image: 'https://ici.edu.mx/wp-content/uploads/2020/01/1572275667222.jpeg',
    },
    {
      id: 3,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'MIA',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'Miami',
      url: '',
      image:
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/22000/22629-Miami-Beach.jpg',
    },
    {
      id: 4,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'JFK',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'New York',
      url: '',
      image:
        'http://insolitviatges.com/assets/viajes/original/de0f33e2a67330dbccfa2f443ca6e3c3.jpg',
    },
    {
      id: 5,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'SFB',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'Orlando',
      url: '',
      image:
        'https://cr00.epimg.net/radio/imagenes/2018/08/27/entretenimiento/1535388126_102373_1535388503_noticia_normal.jpg',
    },
    {
      id: 6,
      fromData: `${posiblePlaces.length > 1 ? posiblePlaces[0][2] : 'MDZ'}`,
      toData: 'PUJ',
      cityFrom: `${posiblePlaces.length > 1 ? posiblePlaces[0][0] : 'MDZ'}`,
      cityTo: 'Punta Cana',
      url: '',
      image:
        'https://www.phdmedia.com/puerto-rico/wp-content/uploads/sites/99/2016/02/PuertoRico1.jpg',
    },
  ];
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
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
          disableSearch={disableSearch}
          key={uuidv4()}
        />
        <OfferItem
          info={info[1]}
          style_class={'offer-item-container offer-item-container2'}
          disableSearch={disableSearch}
          key={uuidv4()}
        />
        <OfferItem
          info={info[2]}
          style_class={'offer-item-container offer-item-container2'}
          disableSearch={disableSearch}
          key={uuidv4()}
        />
        <OfferItem
          info={info[3]}
          style_class={'offer-item-container offer-item-container2'}
          disableSearch={disableSearch}
          key={uuidv4()}
        />
        <OfferItem
          info={info[4]}
          style_class={'offer-item-container'}
          disableSearch={disableSearch}
          big_height={true}
          key={uuidv4()}
        />
        <OfferItem
          info={info[5]}
          style_class={'offer-item-container'}
          disableSearch={disableSearch}
          big_height={true}
          key={uuidv4()}
        />
      </div>
    </>
  );
};

export default IndexInfo;
