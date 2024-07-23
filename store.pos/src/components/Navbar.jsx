import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/login" >Login</Link>
            <Link to="/signup">Sign-up</Link>
        </nav>
    );
};

export default Navbar;