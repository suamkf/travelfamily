import React from 'react';

import './style.css';
import FormSearch from '../../components/FormSearch';

const Index = () => {
  return (
    /* Background Image */
    <div className="bg-img">
      <div className="container">
        <div className="search-info">
          <p className="seacrh-info-title">Best famyly fly experience!</p>
          <p className="search-info-description">
            Hover work is not only give you the best price in fly tickets, also
            give the best family travel experience
          </p>
        </div>
        <div className="search-form">
          <FormSearch />
        </div>
      </div>
    </div>
  );
};

export default Index;
