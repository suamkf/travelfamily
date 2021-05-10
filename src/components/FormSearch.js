import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import './style.css';
import PopUpFormSearch from './PopUpFormSearch';
import { checkValidFromTo, getQuery } from '../utils/funtion-utilities';

const FormSearch = ({ posiblePlaces, disableSearch }) => {
  const [formData, setFormData] = useState(new Map());
  const [query, setQuery] = useState('');

  /*Method to capture data fly from and to later and Dates this data is use to make the API call
   *if the we do not have fly from and to the search button is disabled when we have both data
   *the button is enabled*/
  const setData = (key, value) => {
    setFormData(formData.set(key, value));
    if (checkValidFromTo(formData.get('From'), formData.get('To'))) {
      //enabled button
      document.getElementById('search-button').disabled = false;
      /*we generate the query to make the API cal for example 
      flyFrom=MDZ&to=EZE&dateFrom=10-5-2021&dateTo=10/5/2021&typeFlight=return&returnFrom=25-5-2021&returnTo=25/5/2021
      */
      setQuery(getQuery(formData));
    } else {
      //disable button
      document.getElementById('search-button').disabled = true;
    }
  };
  //method to enabled o disabled search
  const enableSearch = () => {
    disableSearch(true);
  };

  //method to capture, generate and save Dates
  const getDate = (e) => {
    e.preventDefault();
    setData(e.target.id, e.target.value);
  };
  return (
    <div className="search-from-container">
      <div className="item-search-form">
        {/*fly from input , this component have the logic to 
         depending on which city we write, it gives us results 
         in real time of concidences in skypicker**/}
        <PopUpFormSearch
          placeHolder={'From'}
          posiblePlaces={posiblePlaces}
          setdataform={setData}
          key={'123'}
        />
      </div>
      <div className="item-search-form">
        {/*fly to input , this component have the logic to 
         depending on which city we write, it gives us results 
         in real time of concidences in skypicker*/}
        <PopUpFormSearch
          placeHolder={'To'}
          posiblePlaces={posiblePlaces}
          setdataform={setData}
          key={'456'}
        />
      </div>
      <div className="item-search-form">
        {/*date from input */}
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
        {/*date to input */}
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
        <Link onClick={enableSearch} to={`/searh/${query}`}>
          <button className="search-button" disabled id="search-button">
            Buscar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FormSearch;
