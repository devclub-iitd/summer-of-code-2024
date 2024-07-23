import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import global styles if needed
import App from './App'; // Adjust the path as necessary

const root = document.getElementById('root');

const App = () => <div>Hello World</div>;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);