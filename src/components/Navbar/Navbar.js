import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Login from "../login/Login";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="links">
        <div className="effect">
          <NavLink to="/" className="link" exact={true}>
            דף הבית
          </NavLink>
        </div>
        <div className="effect">
          <NavLink to="/about" className="link">
            אודות
          </NavLink>
        </div>
        <div className="effect">
          <NavLink to="/map" className="link">
            מפה
          </NavLink>
        </div>
        <div className="effect share">
          <NavLink to="/forum" className="link">
            שתפו אותנו
          </NavLink>
        </div>
      </nav>
      <div className="logo">
        {/* <NavLink to="/" className="logo-link" exact={true}> */}
        <span className="red">Spot</span> <span className="grey">&</span> <span className="green">Share</span>
        {/* </NavLink> */}
      </div>
      <Login />
    </div>
  );
};
export default Navbar;
