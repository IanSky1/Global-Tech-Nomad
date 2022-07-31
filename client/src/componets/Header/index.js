import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Global Tech Nomad</h1>
      <nav>
        <ul>
          <li>
              <Link to='Home'>
                  Home
              </Link>
          </li>
          <li>
              <Link to='Login'>
                  Login
              </Link>
          </li>
          <li>
              <Link to='About'>
                  About
              </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
