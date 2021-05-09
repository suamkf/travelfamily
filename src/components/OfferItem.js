import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  detector,
  getCurrentDate,
  getFutureDate,
} from '../utils/funtion-utilities';

const OfferItem = ({ info, style_class, big_height, disableSearch }) => {
  const shadeImage = () => {
    const element = document.getElementById(info.id);
    const descrition_element = document.getElementById(
      `description-${info.id}`
    );
    const separator_element = document.getElementById(
      `offer-item-text-separaton-${info.id}`
    );
    if (element && descrition_element && detector.mobile() === null) {
      element.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${info ? info.image : ''})`;
      descrition_element.style.gridRow = 2;
      descrition_element.innerHTML = `<Link to={/searh/flyFrom=${
        info.fromData
      }&to=${
        info.toData
      }${`&dateFrom=${getCurrentDate()}&dateTo=${getCurrentDate()}`}${`&typeFlight=return&returnFrom=${getFutureDate(
        15
      )}&returnTo=${getFutureDate(15)}}`}><p>${info.cityFrom}</p><p>${
        info.cityTo
      }</p> </Link> `;
      separator_element.style.width = '90%';
    }
  };
  const unShadeImage = () => {
    const element = document.getElementById(info.id);
    const descrition_element = document.getElementById(
      `description-${info.id}`
    );
    const separator_element = document.getElementById(
      `offer-item-text-separaton-${info.id}`
    );
    if (element && descrition_element && detector.mobile() === null)
      element.style.backgroundImage = `url(${info ? info.image : ''})`;
    descrition_element.style.gridRow = 10;
    descrition_element.innerHTML = `<p>${info.cityTo}</p> `;
    separator_element.style.width = '60%';
    separator_element.style.fontSize = '1rem';
  };

  useEffect(() => {
    disableSearch(true);
  }, []);

  const sdfsdf =
    '<Linkto={`/searh/flyFrom=${info.fromData}&to=${info.toData}${`&dateFrom=${getCurrentDate()}&dateTo=${getCurrentDate()}`}${`&typeFlight=return&returnFrom=${getFutureDate(15)}&returnTo=${getFutureDate(15)}`}`}className={style_class}>';
  return (
    <>
      <Link
        to={`/searh/flyFrom=${info.fromData}&to=${
          info.toData
        }${`&dateFrom=${getCurrentDate()}&dateTo=${getCurrentDate()}`}${`&typeFlight=return&returnFrom=${getFutureDate(
          15
        )}&returnTo=${getFutureDate(15)}`}`}
        className={style_class}
      >
        <div
          id={info.id}
          className={`offer-item-image  ${big_height ? ' biggest-hight' : ''}`}
          style={{
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),url(${info ? info.image : ''})`,
          }}
          onMouseOver={shadeImage}
          onMouseLeave={unShadeImage}
        >
          <div className="offer-iten-text-container">
            <div
              className="offer-item-text-subcontainer"
              id={`description-${info.id}`}
            >
              <p>{info.cityTo}</p>
            </div>
            <div
              className="offer-item-text-separaton"
              id={`offer-item-text-separaton-${info.id}`}
            ></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default OfferItem;
