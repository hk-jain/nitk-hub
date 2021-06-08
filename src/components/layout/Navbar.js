import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ()=>{
 return(
    <nav className="navbar bg-dark">
      <h1>
        <ul>
        <li><Link to='/'>NitK Hub</Link></li>
            
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      </h1>  
    </nav>
    
    );
} 

export default Navbar;