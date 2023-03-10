import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isl = localStorage.getItem("isLoggedIn");
  console.log(isl);
  console.log(setIsLoggedIn);
  //if (isl) {
  //setIsLoggedIn(isl);
  //}

  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="right">
          <Link to="/" className="logo">
            AssistedPro
          </Link>
        </div>
        <div className="left">
          <Link to="/">Home</Link>
          <Link to="/Kotveny">Kötvény</Link>
          <Link to="/Reszveny">Részvény</Link>
          <Link to="/Kripto">Kripto</Link>
          {isLoggedIn ? <Link to="/Portfolio">Portfoliók</Link> : <div></div>}

          <Link to="/Belepes">Belépés</Link>
          <p className="igen">|</p>
          <Link to="/Regis">Regisztráció</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
