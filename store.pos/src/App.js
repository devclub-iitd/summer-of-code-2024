import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login'; 
// import SignupPage from './pages/signup/signup'; 
// import Navbar from './components/Navbar'; 

function App() {
  console.log('hello app.js working')

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App; 