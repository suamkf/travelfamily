import React from 'react';

import './style.css';
import PopUpFormSearch from './PopUpFormSearch';

const FormSearch = () => {
  return (
    <div className="search-from-container">
      <div className="item-search-form">
        <PopUpFormSearch placeHolder={'From'} />
      </div>
      <div className="item-search-form">
        <PopUpFormSearch placeHolder={'To'} />
      </div>
      <div className="item-search-form">
        <input
          className="input-search-form"
          type="text"
          placeholder="Departure"
        ></input>
      </div>
      <div className="item-search-form">
        <input
          className="input-search-form"
          type="text"
          placeholder="Family size"
        ></input>
      </div>
    </div>
  );
};

export default FormSearch;
