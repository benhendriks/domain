import React from 'react';

import { Link } from 'react-router-dom';

const Nav=() => (

  <div className="nav">
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="" alt="gozerostayfluffy" />
        </Link>
      </div>
        <ul className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/recipies">
            <li>Recipies</li>
          </Link>
          <Link to="/easyswaps">
            <li>Easyswaps</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
    </nav>
  </div>
);


export default Nav;
