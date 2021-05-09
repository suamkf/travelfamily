import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-header-title">
          <p>About us</p>
        </div>
        <div className="about-header-description">
          <p>Title header description</p>
        </div>
      </div>
      <div className="about-body">
        <div className="about-body-title">
          <p>Our Team</p>
        </div>
        <div className="about-body-cards">
          <TeamCar
            image={'https://www.w3schools.com/w3images/team1.jpg'}
            name={'Joe Brand'}
            charge={'CEO & Founder'}
            description={'Some text that describes me lorem ipsum ipsum lorem.'}
          />
          <TeamCar
            image={'https://www.w3schools.com/w3images/team1.jpg'}
            name={'Joe Brand'}
            charge={'CEO & Founder'}
            description={'Some text that describes me lorem ipsum ipsum lorem.'}
          />
          <TeamCar
            image={'https://www.w3schools.com/w3images/team1.jpg'}
            name={'Joe Brand'}
            charge={'CEO & Founder'}
            description={'Some text that describes me lorem ipsum ipsum lorem.'}
          />
        </div>
      </div>
    </div>
  );
};

const TeamCar = ({ image, name, charge, description }) => {
  return (
    <div className="about-body-card-item">
      <div className="about-body-card-item-image">
        <img src={image} alt="team" />
      </div>
      <div className="about-body-card-item-title">
        <p>{name}</p>
      </div>
      <div className="about-body-card-item-position">
        <p>{charge}</p>
      </div>
      <div className="about-body-card-item-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About;
