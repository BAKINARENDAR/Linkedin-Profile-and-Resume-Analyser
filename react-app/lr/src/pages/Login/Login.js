import React from "react";
import '../Login/login.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Login =()=>{
    return(
        <>
        <div className="container">
            <div className="form-box login">
                <form action="">
                   <h1>Login</h1>
                   <div className="input-box">
                     <input type="text" placeholder="Username" required>
                     </input>
                     <FaUser />
                   </div>
                   <div className="input-box">
                     <input type="text" placeholder="Username" required>
                     </input>
                     <FaLock />
                   </div>
                   <div className="forgot-link">
                     <a href="#">Forgot password</a>
                   </div>
                   <button type="submit" className="btn">Login</button>
                   
                   
                </form>
            </div>
        </div>
       



        </>
    )
}
export default Login;