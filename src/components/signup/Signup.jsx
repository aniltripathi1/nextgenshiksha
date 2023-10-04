
import React from "react";
import { useState } from "react";

import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css"; 

const Signup = () => {



  return (
    <div className="signup-container">
      <form  className="registration-form">
        <h2>Register</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
         
      
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
         
   
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
         
     
        />
        <button type="submit">Register</button>
         <button className="btn" >  <NavLink to ="/login">Login</NavLink></button>
        


      </form>
    </div>
  );
}


export default Signup;
