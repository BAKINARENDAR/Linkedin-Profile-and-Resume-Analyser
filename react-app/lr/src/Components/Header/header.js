import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "../Header/header.css";
const Header = () => {
  return (
    <>
      <section className="header-section">
        <div className="header-container">
          <div className="header-content">
            <div className="header-logo">
              <div className="logo-pic">
                <img src={logo} alt="" />
              </div>
              <div className="logo-name">
                <h1>
                  CareerSync<span> AI</span>{" "}
                </h1>
              </div>
            </div>

            <div className="butto">
              <div className="login-button">
                <Link to="/Login">
                  <h2>
                    <Button>Login</Button>
                  </h2>
                </Link>
              </div>
              <div className="signup-button">
                <Link to="/signup">
                <h2>
                  <Button>Sign Up</Button>
                </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
