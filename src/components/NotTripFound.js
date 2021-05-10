import React from 'react';

const NotTripFound = () => {
  return (
    <div className="not-trip-found-container">
      <div className="not-trip-found-wording">
        <b>
          <p>We couldn´t find your trip</p>
        </b>
        <p>Try selecting different dates or nearby pleaces.</p>
      </div>
      <div className="not-trip-found-image">
        <img
          src="https://i.dlpng.com/static/png/6651579_preview.png"
          alt="travel not found"
        ></img>
      </div>
    </div>
  );
};

export default NotTripFound;
