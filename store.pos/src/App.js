import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login'; // Adjust import paths as necessary
import SignupPage from './pages/signup/signup'; // Adjust import paths as necessary
import Navbar from './components/Navbar'; // Assuming you have a separate component for Navbar

function App() {
  return (
        <div>app component loaded
        </div>    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </Router>
  );
}

export default App; 