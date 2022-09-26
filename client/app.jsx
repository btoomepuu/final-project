import React from 'react';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Create from './pages/create';
import LoginSignup from './pages/login-signup';

import {
  BrowserRouter as Router,
  Route,
  Routes
  // Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="login-signup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}
