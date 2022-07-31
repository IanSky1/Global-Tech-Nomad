import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Link to="/">
                <h1>Global Tech Nomad</h1>
            </Link>
           
            <nav className="text-center">
                
                <a href="/Home">Home</a>
                <a href="/SignUp">Sign Up</a>
                <a href="/About">About Us</a>
                <a href="/Login">Log In</a>
            </nav>
        </div>
        </header>
    

        
    );
}

export default Header