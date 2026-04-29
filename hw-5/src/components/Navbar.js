import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="navbar-custom">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </div>
  );
}

export default Navbar;