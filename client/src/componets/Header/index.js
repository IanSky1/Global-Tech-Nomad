import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
    <h1>Global Tech Nomad</h1>
      <nav className="navigation">
        <Link to='/'>
            Home
        </Link>

        <Link to='Login'>
            Login
        </Link>

        <Link to='About'>
            About
        </Link>

        <Link to='Signup'>
            SignUp
        </Link>

      </nav>
    </div>
  );
};

export default Header;
