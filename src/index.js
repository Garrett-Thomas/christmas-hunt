import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Nothing exciting here. This file is responsible for inserting
// the app component into the dom.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

