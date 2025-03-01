import React from 'react';
import "./Navbar.css";
import assets from "../../assets/assests";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className="list_name">
        <li>Home</li>
        <li>3D Products</li>
        <li>3D Packages</li>
        <li>Resources</li>
        <li>3D Services</li>
      </ul>

      {/* Contact Button */}
      <div className="nab-btn">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar;
