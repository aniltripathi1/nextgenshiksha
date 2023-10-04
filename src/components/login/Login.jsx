import React , {useState} from "react";
import { useNavigate,NavLink } from "react-router-dom";
import "./Login.css"

const Login = () =>{

    
    
    return(
      
         <div className="main">
       
        <div className="form-signin">
        <div className="form">
          <h2>Login Here</h2>
          <form >
          <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email Here"
             
             
             
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password Here"
            
              
            />
            <button type="submit" className="btnn">
              Login
            </button>
          </form>
     
          <p className="link">
            Don't have an account <br />
            <NavLink to="/register">Sign up </NavLink> here
          </p>
         
        </div>
      </div>
      
</div>
    

       
    )
}
export default Login;

