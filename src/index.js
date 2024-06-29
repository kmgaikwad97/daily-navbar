import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
export { default as Navbar } from './Components/Navbar/Navbar';
export { default as Home } from './Components/Home/Home';
export { default as About } from './Components/About/About';
export { default as Contact } from './Components/Contact/Contact';
export { default as Products } from './Components/Products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
