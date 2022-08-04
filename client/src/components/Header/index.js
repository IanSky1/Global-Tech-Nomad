import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="header">
    <h1>Global Tech Nomad</h1>
      <nav className="navigation">
      <Link to='/'>Home</Link>
        {Auth.loggedIn() ? (
          <>
            <Link to='Profile'>Profile</Link>
            <Link to='Continents'>Continents</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ): (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
