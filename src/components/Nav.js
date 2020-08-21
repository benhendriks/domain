import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';

function Nav()  {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <div className="navbar">
      <div className="navbar-container nav-box">
      <Link to="/" className="navbar-logo">
        Go zero
        stay fluffy
      </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipies" className="nav-links">
                Recipies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/easyswaps" className="nav-links">
                Easyswaps
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Nav;
