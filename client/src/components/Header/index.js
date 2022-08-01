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
              
                    <h1 >Global Tech Nomad</h1>
            
           
                <nav className="navigation">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile">Me</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to='/'> Home </Link>
                        <Link to='About'>About </Link>
                    </>
                    )}
                </nav>
            </div>
       
    
    // <a href="/Home">Home</a>
    // <a href="/SignUp">Sign Up</a>
    // <a href="/About">About Us</a>
    // <a href="/Login">Log In</a>

        
    );
};

export default Header;
