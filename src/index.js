import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import movie from './reducers'
import './index.css';
import App from './components/App';

const store = createStore(movie) ; // movie was imported reducers file 
console.log('store' , store);


// console.log('before state', store.getState()); 

// store.dispatch({
//   type: "ADD_MOVIES"
// }) ;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App store={store}  />

);

