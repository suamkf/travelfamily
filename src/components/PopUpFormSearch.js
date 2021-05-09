import React, { useState } from 'react';

const PopUpFormSearch = ({
  placeHolder,
  posiblePlaces,
  changeList,
  setdataform,
}) => {
  const [place, setPlace] = useState('');

  const setData = (e) => {
    e.preventDefault();
    setdataform(placeHolder, e.target.value);
    setPlace(e.target.value);
    changeList(place);
  };

  const setDataOnChange = (e) => {
    e.preventDefault();
    setPlace(e.target.value);
    setdataform(placeHolder, place);
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
        <datalist id="list-places" key={new Date()}>
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
