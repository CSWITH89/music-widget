import React from "react";

const Navbar = () => {
  return (

    // NAVBAR SECTION
    <nav className="navbar">
      <a href="/" className="navbar__logo">
        Music Widget
      </a>
      <div className="navbar__bars">
        <i className="fas fa-bars"></i>
      </div>
      <div className="navbar__menu">
        <a href="/" className="navbar__menu--links">
          Home
        </a>
        <a href="/" className="navbar__menu--links">
          Products
        </a>
        <a href="/" className="navbar__menu--links">
          Services
        </a>
        <a href="/" className="navbar__menu--links" id="button">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
