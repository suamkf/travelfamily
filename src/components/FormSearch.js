import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import './style.css';
import PopUpFormSearch from './PopUpFormSearch';
import { checkValidFromTo } from '../utils/funtion-utilities';

const FormSearch = ({ posiblePlaces, changeList }) => {
  const [formData, setFormData] = useState(new Map());

  const setData = (key, value) => {
    setFormData(formData.set(key, value));
    document.getElementById('search-button').disabled = !checkValidFromTo(
      formData.get('From'),
      formData.get('To')
    );
  };

  const getDate = (e) => {
    e.preventDefault();
    setData(e.target.id, e.target.value);
  };
  return (
    <div className="search-from-container">
      <div className="item-search-form">
        <PopUpFormSearch
          placeHolder={'From'}
          posiblePlaces={posiblePlaces}
          changeList={changeList}
          setdataform={setData}
        />
      </div>
      <div className="item-search-form">
        <PopUpFormSearch
          placeHolder={'To'}
          posiblePlaces={posiblePlaces}
          changeList={changeList}
          setdataform={setData}
        />
      </div>
      <div className="item-search-form">
        <form className="input-search-form" noValidate>
          <p>From</p>
          <TextField
            id="dateFrom"
            type="date"
            defaultValue={''}
            className="input-search-form-text-field"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={getDate}
          />
        </form>
      </div>
      <div className="item-search-form">
        <form className="input-search-form" noValidate>
          <p>To</p>
          <TextField
            id="dateTo"
            type="date"
            defaultValue={''}
            className="input-search-form-text-field"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={getDate}
          />
        </form>
      </div>
      <div className="search-button-form">
        <Link to="/searh/:query">
          <button className="search-button" disabled id="search-button">
            Buscar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FormSearch;
