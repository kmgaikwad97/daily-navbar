import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FaFacebookF, FaUser, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="social-icons">
            <div className="icon"><FaFacebookF /></div>
            <div className="icon"><FaTwitter /></div>
            <div className="icon"><FaInstagram /></div>
          </div>
          <div className="hamburger-menu">
            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="site-logo">
            <h2>E-Kharedi</h2>
          </div>
          <div className="user-icons">
            <div className="icon"><FaMagnifyingGlass /></div>
            <div className="icon"><FaShoppingCart /></div>
            <div className="icon"><FaUser /></div>
          </div>
          <div className="search-icon">
            <div className="icon"><FaMagnifyingGlass /></div>
          </div>
        </div>
        <div className="navigation-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className={`off-screen-menu ${isActive ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={handleToggle}>Home</Link></li>
              <li><Link to="/products" onClick={handleToggle}>Products</Link></li>
              <li><Link to="/about" onClick={handleToggle}>About</Link></li>
              <li><Link to="/contact" onClick={handleToggle}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
