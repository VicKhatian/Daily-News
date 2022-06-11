import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <Link id="nav" className="navList" to="/">
            Home
          </Link>
          <Link id="nav" to="/world">
            World
          </Link>
          <Link id="nav" to="/business">
            Business
          </Link>
          <Link id="nav" to="/sports">
            Sports
          </Link>
          <Link id="nav" to="/science">
            Science
          </Link>
          <Link id="nav" to="/health">
            Health
          </Link>
          <Link id="nav" to="/tech">
            Technology
          </Link>
          <Link id="nav" to="/entertainment">
            Entertainment
          </Link>
        </div>
        <div className="navbar-right">
          <p>Log-in</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
