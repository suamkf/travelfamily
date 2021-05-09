import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { getListAiportByCity } from '../utils/funtion-utilities';

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
        key={placeHolder}
        onSelectCapture={setDataOnChange}
      />

      {posiblePlaces.length > 1 ? (
        <datalist id="list-places" key={uuidv4()}>
          {posiblePlaces.map((element) => (
            <option
              value={`${element[0]}-${element[1]}-${element[2]}`}
              key={uuidv4()}
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
