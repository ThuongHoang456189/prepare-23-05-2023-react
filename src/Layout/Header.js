import React from 'react';
import {Link} from "react-router-dom";
import {useOidc} from "@axa-fr/react-oidc";

const Header = () => {
    const {login, logout, isAuthenticated} = useOidc();
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
                {!isAuthenticated && <button onClick={() => login('http://localhost:3000')}>Login</button>}
                {isAuthenticated && <button onClick={() => logout('http://localhost:3000')}>Logout</button>}
            </nav>
        </div>
    );
};

export default Header;