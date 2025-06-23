// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux'; 
import store from './store/store';
import App from './App';
import './styles/index.css'; 

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
