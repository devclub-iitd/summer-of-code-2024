// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import LoginModal from './components/LoginModal';
import SignupModal from './components/signUpModal';

// import AboutPage from './pages/AboutPage'; // Assuming you have an About page
// import ContactPage from './pages/ContactPage'; // Assuming you have a Contact page

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div className='backgroundImage'>
      <Router>
        <Navbar setShowLoginModal={setShowLoginModal} setShowSignupModal={setShowSignupModal} />

        {showLoginModal && (<LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => { setShowLoginModal(false); setShowSignupModal(true); }} 
        />)}

        {showSignupModal && (
          <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
        )}
        
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;