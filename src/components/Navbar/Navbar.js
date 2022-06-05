import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Login from "../login/Login";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="links">
        <nav>
          <NavLink to="/" className="link" exact={true}>
            דף הבית
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/about" className="link">
            אודות
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/forum" className="link">
            שתפו אותנו
          </NavLink>
        </nav>
      </nav>
      <nav className="logo">
        <NavLink to="/" className="logo-link">
          <span className="red">Spot</span> <span className="grey">&</span> <span className="green">Share</span>
        </NavLink>
      </nav>
      <Login />
    </div>
  );
};
export default Navbar;
