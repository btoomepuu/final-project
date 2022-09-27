import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBeans } from '@fortawesome/sharp-solid-svg-icons';

import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="row">
        <div className="logo">
          <Link to="/" className="link">
            <FontAwesomeIcon icon={faCoffeeBeans} /> coolbeans
          </Link>
        </div>
        <Link to="/create" className="link create">
          <span>Create Plan</span>
        </Link>
        <Link to="/login-signup" className="link login">
          <span>Login/Signup</span>
        </Link>
        <Link to="/account" clasName="link login">
          <span >Account</span>
        </Link>
      </nav>
    </div>
  );
}
