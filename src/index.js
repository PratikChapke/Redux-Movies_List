import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'react-redux';

import './index.css';
import App from './components/App';

const store = createStore ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

