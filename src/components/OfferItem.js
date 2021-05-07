import React from 'react';
import { Link } from 'react-router-dom';

import { detector } from '../utils/funtion-utilities';

const OfferItem = ({ info, style_class, big_height }) => {
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
      descrition_element.innerHTML = ' <p >Salida --></p><p>Destino</p> ';
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
    descrition_element.innerHTML = ' <p>Destino</p> ';
    separator_element.style.width = '60%';
  };
  return (
    <div className={style_class}>
      <Link to={info.url}>
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
              <p>Destino</p>
            </div>
            <div
              className="offer-item-text-separaton"
              id={`offer-item-text-separaton-${info.id}`}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OfferItem;
