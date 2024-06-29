import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
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
          <Route path="/" element={<Home bannerImage="put-imagelink" bannerHeading="Welcome" bannerSubHeading="Find Amazing Products Below" testContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
