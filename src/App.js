import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/HomePage';
import Login from '../src/components/Login';
import Signup from '../src/components/SignUp';
import VerificationCode from '../src/components/VerificationCode';
import Logout from '../src/components/Logout';

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isVerificationOpen, setVerificationOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  const handleOpenLogin = () => setLoginOpen(true);
  const handleCloseLogin = () => setLoginOpen(false);
  const handleLogin = (email, password) => {
    console.log('Logged in with:', email, password);
    setLoginOpen(false);
    
  };

  const handleOpenSignup = () => setSignupOpen(true);
  const handleCloseSignup = () => setSignupOpen(false);
  const handleSignup = (email, password) => {
    console.log('Signed up with:', email, password);
    setSignupOpen(false);
    setVerificationOpen(true);
  };

  const handleCloseVerification = () => setVerificationOpen(false);
  const handleVerify = (code) => {
    console.log('Verification code:', code);
    setVerificationOpen(false);
  };

  const handleOpenLogout = () => setLogoutOpen(true);
  const handleCloseLogout = () => setLogoutOpen(false);
  const handleLogout = () => {
    console.log('Logged out');
    setLogoutOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleOpenLogin={handleOpenLogin}
              handleOpenSignup={handleOpenSignup}
              handleOpenLogout={handleOpenLogout}
            />
          }
        />
      </Routes>
      <Login open={isLoginOpen} handleClose={handleCloseLogin} handleLogin={handleLogin} />
      <Signup open={isSignupOpen} handleClose={handleCloseSignup} handleSignup={handleSignup} />
      <VerificationCode open={isVerificationOpen} handleClose={handleCloseVerification} handleVerify={handleVerify} />
      <Logout open={isLogoutOpen} handleClose={handleCloseLogout} handleLogout={handleLogout} />
    </Router>
  );
};

export default App;
