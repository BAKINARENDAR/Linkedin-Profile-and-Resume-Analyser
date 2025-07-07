import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import logingoogle from "../../images/login-google.jpg";
import logo from "../../images/logo.jpg";
import { handleError, handleSuccess } from "../../util";
import "../Login/login.css";

const Login = () => {
  const { setshowheaderfooter } = useContext(MyContext);

  useEffect(() => {
    setshowheaderfooter(false);
    return () => setshowheaderfooter(true);
  }, [setshowheaderfooter]);

const[logininfo,setlogininfo]=useState({
  email:"",
  password:""
})

 const handleChange=(e)=>{
const {name,value}=e.target;
setlogininfo({
  ...logininfo , [name]:value
});
 }
 const navigate=useNavigate();

 const handleLogin= async (e)=>{
     e.preventDefault();
     const{email,password}=logininfo;

     if(!email || !password)
     {
    return  handleError("Email, and Password are required");
     }

     try{
      const url = "http://localhost:8080/auth/login";
      const response=await fetch(url,{
        method:'POST',
        headers:{
          "Content-type": "application/json",
        },
        body:JSON.stringify(logininfo),
      });
      const result=await response.json();
      console.log(result);
      const{name}=result;
      if (response.ok) {
            handleSuccess("Login successful!");
            navigate("/");
            localStorage.setItem("LoginUser",name);
          }
        
            else{
 const details = result?.error?.details?.[0]?.message;
      const message = details || result?.message || "Login failed";
      handleError(message);
          }

     }catch (err){
      console.err(err);
      handleError("Something went wrong")

     }
 }


  return (
    <section className="login-container">
      <div className="login-content">
        <div className="login-logo">
          <div className="logo-pic">
            <img src={logo} alt="" />
          </div>
          <div className="logo-name">
            <h1>
              CareerSync<span> AI</span>
            </h1>
          </div>
        </div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
                  onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <button type="submit" className="primary-btn">
            Continue
          </button>

        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-buttons">
          <button className="social-btn">
            <div className="google-img">
              <img src={logingoogle} alt="" />
            </div>
            <div className="continue-with">
              <span>Continue with Google</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
