import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  return (
    <div className="topnav" id="myTopnav">
      <Link to="#home" className="active">
        Home
      </Link>
      <Link to="/">Contact</Link>
      <Link to="/">About</Link>
      <Link className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Nav;
