import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ Toast support
import "react-toastify/dist/ReactToastify.css"; // ✅ Toast styles

import "./App.css";

import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Home from "./pages/Home/Home";
import Interface from "./pages/Interface/Interface";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

// Context for showing/hiding header/footer
export const MyContext = createContext();

function App() {
  const [showheaderfooter, setshowheaderfooter] = useState(true);

  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {/* Toast Container must be inside the context and router */}
          <ToastContainer position="top-right" autoClose={3000} />
          {showheaderfooter && <Header />}
          <Routes>
            <Route path="/" element={<Interface />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
          {showheaderfooter && <Footer />}
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
