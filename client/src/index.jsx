import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';


ReactDOM.createRoot(
  <React.StrictMode>
    <HashRouter basename="/">
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);