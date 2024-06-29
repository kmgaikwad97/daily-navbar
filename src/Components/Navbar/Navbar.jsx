import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Navbar.css";
// import { FaFacebookF, FaUser, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = ({ logo, links, socialIcons, userIcons, fixed = true, layout = 'block' }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const navbarClass = `navbar-container ${fixed ? 'fixed' : ''} ${layout}`;

  return (
    <nav>
      <div className={navbarClass}>
        <div className="navbar-top">
          <div className="social-icons">
            {socialIcons.map((Icon, index) => (
              <div className="icon" key={index}>{<Icon />}</div>
            ))}
          </div>
          <div className="hamburger-menu">
            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="site-logo">
            <h2>{logo}</h2>
          </div>
          <div className="user-icons">
            {userIcons.map((Icon, index) => (
              <div className="icon" key={index}>{<Icon />}</div>
            ))}
          </div>
          <div className="search-icon">
            <div className="icon"><FaMagnifyingGlass /></div>
          </div>
        </div>
        <div className="navigation-links">
          <ul>
            {links.map((link, index) => (
              <li key={index}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="sidebar-menu">
          <div className={`off-screen-menu ${isActive ? 'active' : ''}`}>
            <ul>
              {links.map((link, index) => (
                <li key={index}><Link to={link.path} onClick={handleToggle}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  socialIcons: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  userIcons: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  fixed: PropTypes.bool,
  layout: PropTypes.oneOf(['block', 'flex']),
};

export default Navbar;