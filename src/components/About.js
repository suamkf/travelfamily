import React from 'react';

const About = () => {
  /*simple footer component*/
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-header-title">
          <p>About us</p>
        </div>
        <div className="about-header-description">
          <p>Family travel team members</p>
        </div>
      </div>
      <div className="about-body">
        <div className="about-body-title">
          <p>Our Team</p>
        </div>
        <div className="about-body-cards">
          <TeamCar
            image={
              'https://i.ibb.co/dMWdkm1/Whats-App-Image-2021-05-09-at-4-33-09-PM.jpg'
            }
            name={'Emanuel'}
            charge={'CEO & Founder'}
            description={
              'In charge of coordinating the times and tasks of the team, such as playing, eating or sleeping.'
            }
          />
          <TeamCar
            image={
              'https://i.ibb.co/djrmyLX/Whats-App-Image-2021-05-09-at-4-33-08-PM-1.jpg'
            }
            name={'Yamila'}
            charge={'COO & Founder'}
            description={
              'Coordination of tasks in the short and medium term. As a secondary task is teaching our CEO to walk.'
            }
          />
          <TeamCar
            image={
              'https://i.ibb.co/gvHb3r6/Whats-App-Image-2021-05-09-at-4-33-08-PM.jpg'
            }
            name={'Pablo'}
            charge={'CTO & Founder'}
            description={
              'Principal team developer and also principal assistant with baths and diaper changes to our CEO.'
            }
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
