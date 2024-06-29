import React, { useState } from 'react';
import "./Navbar.css"
import { FaFacebookF, FaUser, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";




const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <nav>
      <div className="banner">
        <div className="banner-content">
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
                <li><a href="/">Home</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className="sidebar-menu">
                <div className={`off-screen-menu ${isActive ? 'active' : ''}`}>
                  <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">product</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="banner-heading">
            <p>Welcome to Ecommerce</p>
            <h3>FIND AMAZING PRODUCTS BELOW</h3>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
