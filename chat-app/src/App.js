// src/App.js

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import AuthContext from './context/AuthContext';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* 로그인 상태에 따라 라우팅 제어 */}
        {isLoggedIn ? (
          <>
            <Route path="/home/*" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
