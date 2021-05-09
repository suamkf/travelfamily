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
  const redirectHome = () => {
    history.push('/');
  };
  const redirectAbut = () => {
    history.push('/about');
  };
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Nav;
