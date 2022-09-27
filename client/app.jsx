import React, { useState } from 'react';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Create from './pages/create';
import LoginSignup from './pages/login-signup';
import Account from './pages/account-page';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = boolean => {
    setIsAuth(boolean);
  };

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login-signup" element={<LoginSignup setAuth={setAuth}/>} />
          <Route path="/account" element={isAuth ? <Account /> : <LoginSignup setAuth={setAuth}/> } />
        </Routes>
      </div>
    </Router>
  );
}
