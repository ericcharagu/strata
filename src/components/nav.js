import React from "react";
import { BrowserRouter as Router, Path, Link } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import "./nav.css";
function NavBar() {
  return (
    <nav>
      <div className="navbar-container" id="nav">
        <Link to="/" className="navbar-logo">
          <img src="logodark.png" />
        </Link>
        {/*  <ul className="nav-list">
          <li className="nav-item">
            <Link to="/arch" className="nav-links">
              Architecture
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/energy" className="nav-links">
              Energy Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/visuals" className="nav-links">
              Visualisations
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default NavBar;
