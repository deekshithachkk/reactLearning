import { useAuth } from '../../provider/AuthProvider';
import React, { useState } from 'react';

function Login() {
    const [user,setUser]=useState();
      const { login } = useAuth();

    const handleLogin=()=>{
        login(user)
        
    }
    return (
        <div>
           <input placeholder='enter the name' onChange={(e)=>setUser(
// @ts-ignore
           e.target.value)}/>
           <button onClick={handleLogin}>Login</button> 
        </div>
    );
}

export default Login;