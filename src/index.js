import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
// import './index.js';
import App from './App';
import { login } from './components/login/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>
);

