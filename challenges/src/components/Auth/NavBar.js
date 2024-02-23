import { useAuth } from '../../provider/AuthProvider';
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    // @ts-ignore
    const { user } = useAuth() ;

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            {user?.name && <NavLink to="profile">Profile</NavLink>}
            {!user?.name && <NavLink to="login">login</NavLink>}
            <NavLink to="/extra">Extra</NavLink>
        </nav>
            
        
    );
}

export default NavBar;