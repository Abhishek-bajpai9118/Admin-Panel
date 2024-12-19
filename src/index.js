import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import Adminpanel from './AdminSrc/Adminpanel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Adminpanel/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
