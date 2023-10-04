import React from 'react';
import './Navbar.css'; // Import your custom CSS file
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      
        <div className="container">

          <NavLink  to = "/"className="navbar-brand" >NextGen<span className="decoration">Shiksha</span></NavLink>
                <NavLink to ="/" className="nav-link active" id='links' aria-current="page" >Home</NavLink>
             
                <NavLink  to = "/about" className="nav-link" id='links' >About</NavLink>
                <NavLink  to =  "/schemes" className="nav-link" id='links'>Schemes</NavLink>
            
                <NavLink  to = "/elibrary" className="nav-link active" id='links' aria-current="page" >E-library</NavLink>
              
             
                <NavLink  to="/login" className="nav-link active" id='links' aria-current="page" >Login</NavLink>

           </div> 
       
      </nav>
    </div>
  );
}

export default Navbar;