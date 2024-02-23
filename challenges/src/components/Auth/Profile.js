import { useAuth } from 'provider/AuthProvider';
import React from 'react';

function Profile() {
    const {user,logout}=useAuth();
    const handleLogout=()=>{
        logout()
    }
    return (
        <div>
           <h1>Welcome {user.name}</h1> 
           <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;