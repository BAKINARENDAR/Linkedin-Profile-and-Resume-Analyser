import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import logingoogle from "../../images/login-google.jpg";
import logo from "../../images/logo.jpg";
import { handleError, handleSuccess } from "../../util";
import "../Signup/signup.css";

const Signup = () => {
  const { setshowheaderfooter } = useContext(MyContext);

  useEffect(() => {
    setshowheaderfooter(false);
    return () => setshowheaderfooter(true);
  }, [setshowheaderfooter]);

  const [signupinfo, setsignupinfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupinfo({ ...signupinfo, [name]: value });
  };

 const handleSignup = async (e) => {
  e.preventDefault();
  const { name, email, password } = signupinfo;

  if (!name || !email || !password) {
    return handleError("Name, Email, and Password are required");
  }

  try {
    const url = "http://localhost:8080/auth/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupinfo),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      handleSuccess("Signup successful!");
      navigate("/Login");
    } else {
      
      const details = result?.error?.details?.[0]?.message;
      const message = details || result?.message || "Signup failed";
      handleError(message);
    }
  } catch (err) {
    console.error(err);
    handleError("Something went wrong!");
  }
};

  return (
    <section className="signup-section">
      <div className="signup-container">
        <div className="signup-content">
          <div className="login-logo">
            <div className="logo-pic">
              <img src={logo} alt="logo" />
            </div>
            <div className="logo-name">
              <h1>
                CareerSync<span> AI</span>
              </h1>
            </div>
          </div>
          <h1>Signup</h1>
          <form onSubmit={handleSignup}>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={signupinfo.name}
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={signupinfo.email}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={signupinfo.password}
              required
            />

            <button type="submit" className="primary-btn">
              Signup
            </button>

            <div className="already">
              <span>Already Registered? </span>
              <Link style={{ textDecoration: "none" }} to="/Login">
                <h3>Login</h3>
              </Link>
            </div>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
            <div className="social-btn">
              <div className="google-img">
                <img src={logingoogle} alt="Google login" />
              </div>
              <div className="continue-with">
                <span>Continue with Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
