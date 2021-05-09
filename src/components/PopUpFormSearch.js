import React, { useState } from 'react';
import Axios from 'axios';

import { getListAiportByCity } from '../utils/funtion-utilities';
import { isElementOfType } from 'react-dom/test-utils';
const PopUpFormSearch = ({ placeHolder, setdataform }) => {
  const [place, setPlace] = useState('');
  const [posiblePlaces, setPosiblePlaces] = useState([]);

  const getDataServerByPlace = async () => {
    const res2 = await Axios(
      `https://api.skypicker.com/locations?term=${place}&location_types=airport&sort=rank`
    );
    const response = getListAiportByCity(res2.data.locations);

    setPosiblePlaces(response);
  };

  const setData = (e) => {
    e.preventDefault();
    setdataform(placeHolder, e.target.value);
    setPlace(e.target.value);
    getDataServerByPlace();
  };

  const setDataOnChange = (e) => {
    e.preventDefault();
    setPlace(e.target.value);
  };

  return (
    <>
      <input
        type="search"
        list="list-places"
        className="input-search-form-input-place"
        onChange={setData}
        value={place}
        placeholder={placeHolder}
        onSelectCapture={setDataOnChange}
      />

      {posiblePlaces.length > 1 ? (
        <datalist id="list-places" key={placeHolder}>
          {posiblePlaces.map((element) => (
            <option
              key={element[2]}
              value={`${element[0]}-${element[1]}-${element[2]}`}
            />
          ))}
        </datalist>
      ) : (
        ''
      )}
    </>
  );
};

export default PopUpFormSearch;
