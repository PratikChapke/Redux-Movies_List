import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from '@reduxjs/toolkit';

import movie from './reducers'
import './index.css';
import App from './components/App';

const store = createStore(movie) ;
console.log('store' , store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

