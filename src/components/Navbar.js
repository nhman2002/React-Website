import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./Button.js";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {isShow && <Button buttonStyle="btn--outline" active="btn-sign-up">SIGN-UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
