import React, { useState, useEffect } from 'react';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Create from './pages/create';
import LoginSignup from './pages/login-signup';
import Account from './pages/account-page';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from 'react-router-dom';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = boolean => {
    setIsAuth(boolean);
  };

  async function auth() {
    try {
      const response = await fetch('/auth/verified/', {
        method: 'GET',
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      parseRes === true ? setIsAuth(true) : setAuth(false);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    auth();
  });

  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route exact path="/login-signup" element={!isAuth ? <LoginSignup setAuth={setAuth} /> : <Account setAuth={setAuth}/>} />
          <Route exact path="/account" element={isAuth ? <Account setAuth={setAuth} /> : <LoginSignup setAuth={setAuth} />}/>
        </Routes>
      </Router>
    </div>
  );
}
