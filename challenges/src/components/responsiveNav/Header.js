import React from 'react';
import  { Link } from 'react-router-dom';

function Header() {
    return (
      <div className='nav-container'>
        <span className="title">Infinity</span>
          <nav className="header-container"> 
          
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/">About</Link>
            <Link className="link" to="/">Portfolio</Link>
            <Link className="link" to="/">Services</Link>
            <Link className="link" to="/">Contact</Link>
        
         </nav> 
        </div> 
    );
}

export default Header;