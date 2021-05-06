import React from 'react';
import TextField from '@material-ui/core/TextField';

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
        <form className="input-search-form" noValidate>
          <TextField
            id="date"
            type="date"
            defaultValue={''}
            className="input-search-form"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="item-search-form">
        <form className="input-search-form" noValidate>
          <TextField
            id="date"
            type="date"
            defaultValue={''}
            className="input-search-form"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="search-button-form">
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
};

export default FormSearch;