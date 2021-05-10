import React from 'react';

import FormSearch from './FormSearch';

const Search = ({ posiblePlaces, disableSearch }) => {
  return (
    <div className="search-bg-img">
      <div className="search-container">
        <div className="search-info">
          <p className="seacrh-info-title">Best family fly experience!</p>
          <p className="search-info-description">
            Family Travel not only give you the best price in fly tickets, also
            give the best family travel experience.
          </p>
        </div>
        <div className="search-form">
          {/* Search form contain creation of input fields and logic to capture their info*/}
          <FormSearch
            posiblePlaces={posiblePlaces}
            disableSearch={disableSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
