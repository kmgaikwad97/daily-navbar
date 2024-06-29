import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export { default as Navbar } from './Components/Navbar/Navbar';
export { default as Home } from './Components/Home/Home';
export { default as About } from './Components/About/About';
export { default as Contact } from './Components/Contact/Contact';
export { default as Products } from './Components/Products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
