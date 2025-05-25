
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
               <img  src={logo} alt=""/>
              </div>
                <div className="logo-name">
                    <h1>CareerSync<span> AI</span> </h1>
                </div>
             
            </div>
            <div className="login-button">
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
