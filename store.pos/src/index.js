import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import App from './App'; 

console.log('hello world index.js working')

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);