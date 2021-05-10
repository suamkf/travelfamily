import React from 'react';
import { Link } from 'react-router-dom';

/* We create a responsive nav bar */
const Nav = ({ props }) => {
  function actionMenu() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="" className="icon" onClick={actionMenu}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Nav;
