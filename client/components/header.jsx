import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBeans } from '@fortawesome/sharp-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

// import Home from './pages/home';
import OrderPage from '../pages/order-page';
import Login from '../pages/login-signup';
import Account from '../pages/account-page';

export default class Header extends React.Component {
  render() {
    return (
      <div className='continer'>
        <Router>
          <Navbar >
            <Navbar.Brand href="#home" className='coffeebean'>
              <FontAwesomeIcon icon={faCoffeeBeans} /> coolbeans
            </Navbar.Brand>
            <Navbar aria-controls="basic-navbar-nav" />
            <Nav.Link as={Link}
              to="login-signup">Login/Signup</Nav.Link>
            <Nav.Link as={Link}
              to="/order" >Create Plan</Nav.Link>
            <Nav.Link as={Link}
              to="/account" >Account</Nav.Link>
          </Navbar>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Switch>

            <Route path='/order-page' >
              <OrderPage />
            </Route>
            <Route path='/account-page' >
              <Account />
            </Route>
          </Switch> */}

        </Router>
      </div>
    );
  }
}
