import React from 'react';

const FlyListItem = () => {
  return (
    <div className="fly-list-item-container">
      <div className="fly-list-item-dep-des-container">
        <div className="fly-list-item-departure-destination none-top-border">
          <div className="fly-list-item-icon"></div>
        </div>

        <div className="fly-list-item-departure-destination">
          <div className="fly-list-item-icon"></div>
        </div>
      </div>
      <div className="fly-list-item-price"></div>
    </div>
  );
};

export default FlyListItem;
