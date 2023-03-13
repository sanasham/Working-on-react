import React, { useState } from 'react';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import Contact from '../Navigation/Contact';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  const loggedInUser = () => {
    return loggedIn ? true : false;
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="">
        {loggedInUser() ? (
          <button onClick={handleLogin}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
