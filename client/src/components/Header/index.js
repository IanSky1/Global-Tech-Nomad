import React from "react";

const Header = () => {
    return (
        <> 
        <div className="header">
            <h1>Global Tech Nomad</h1>
            <nav className="navigation">
                <a href="/Home">Home</a>
                <a href="/SignUp">Sign Up</a>
                <a href="/About">About Us</a>
                <a href="/Login">Log In</a>
            </nav>
        </div>

        </>
    );
}

export default Header