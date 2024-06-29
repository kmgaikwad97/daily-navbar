// import './App.css';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// function App() {

//   // const appRouter = createBrowserRouter([
//   //   {
//   //       path:"/",
//   //       element:<Home/>
//   //   },
//   //   {
//   //     path:"/about",
//   //     element:<About/>
//   //   },
//   //   {
//   //     path:"/contact",
//   //     element:<Contact/>
//   //   },
    
  
//   // ]);



//   return (
//     <>
//       {/* <Navbar/>
//       <RouterProvider router={appRouter} /> */}
//     </>
//   );
// }



// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

