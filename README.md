

daily-navbar
A customizable and responsive navbar component for React applications.

This package provides a flexible navbar component that you can easily integrate into your React projects. It includes navigation links for Home, Products, About, and Contact pages, along with social icons and user icons.

Installation
You can install the package via npm:

npm install daily-navbar


Usage
Importing Components

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'daily-navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import "./App.css"
import { FaFacebookF, FaUser, FaTwitter, FaInstagram, FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const App = () => {
  return (
    <Router>
      <Navbar
        logo="MyLogo"
        links={[
          { path: "/", name: "Home" },
          { path: "/products", name: "Products" },
          { path: "/about", name: "About" },
          { path: "/contact", name: "Contact" },
        ]}
        socialIcons={[FaFacebookF, FaTwitter, FaInstagram]}
        userIcons={[FaMagnifyingGlass, FaShoppingCart, FaUser]}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home bannerImage="https://images.pexels.com/photos/4553182/pexels-photo-4553182.jpeg" bannerHeading="Welcome" bannerSubHeading="This is the Title" testContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


Props
logo: The logo to display in the navbar.
links: An array of objects containing navigation links and their paths.
socialIcons: An array of social icons (e.g., Facebook, Twitter).
userIcons: An array of user icons (e.g., search, shopping cart, user profile).
Example
You can customize the navbar appearance, add your own icons, and adjust the layout to suit your project needs.

Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.