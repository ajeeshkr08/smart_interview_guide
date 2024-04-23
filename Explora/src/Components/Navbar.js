// src/Navbar.js
import React from "react";
import "./Navbar.css";
const Navbar = ({ setLoggedIn }) => {
  const handleLogout = () => {
    // Implement the logic for logout
    setLoggedIn(false);
    console.log("Logout logic goes here");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <label>Explora</label>
      </div>

      <button className="btn2" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
