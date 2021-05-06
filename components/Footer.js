import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <p>Our socials</p>
      </div>
      <div className="footer-icons-container">
        <Icon icon="https://i.pinimg.com/originals/2d/b1/a7/2db1a73fdbf33f59286fe8693324160c.png" />
        <Icon icon="https://i.pinimg.com/originals/2d/b1/a7/2db1a73fdbf33f59286fe8693324160c.png" />
        <Icon icon="https://i.pinimg.com/originals/2d/b1/a7/2db1a73fdbf33f59286fe8693324160c.png" />
      </div>
    </div>
  );
};

const Icon = ({ icon }) => {
  return (
    <div className="footer-icon">
      <img className="footer-icon-image" src={icon} alt={icon} />
    </div>
  );
};

export default Footer;
