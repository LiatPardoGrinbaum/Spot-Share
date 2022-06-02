import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="links">
        <div>
          <Link to="/" className="link">
            דף הבית
          </Link>
        </div>
        <div>
          <Link to="/about" className="link">
            אודות
          </Link>
        </div>
        <div>
          <Link to="/forum" className="link">
            שתפו אותנו
          </Link>
        </div>
      </div>
      <div className="logo">
        <Link to="/" className="logo-link">
          Spot & Share
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
