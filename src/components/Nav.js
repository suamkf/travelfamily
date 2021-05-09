import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Nav = ({ props }) => {
  const history = useHistory();
  function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  const redirect = () => {
    history.push('/');
  };
  return (
    <div className="topnav" id="myTopnav">
      <Link onClick={redirect} className="active">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Nav;
