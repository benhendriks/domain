import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="" alt="gozerostayfluffy" />
          </Link>
        </div>
          <ul className="nav-links">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link>
            <Link style={navStyle} to="/recipies">
              <li>Recipies</li>
            </Link>
            <Link style={navStyle} to="/easyswaps">
              <li>Easyswaps</li>
            </Link>
            <Link style={navStyle} to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;