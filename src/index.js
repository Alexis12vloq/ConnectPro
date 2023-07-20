import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Import the functions you need from the SDKs you need

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <App />
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
