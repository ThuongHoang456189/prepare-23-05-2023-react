import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <header>
            APP
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
            </nav>
        </header>
    );
};

export default Footer;