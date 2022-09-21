import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffeeBeans } from '@fortawesome/sharp-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div className='continer'>
        <Navbar className='navbar' expand="lg">
          <Navbar.Brand className='coffeebean'>
            <FontAwesomeIcon icon={faCoffeeBeans} /> coolbeans
          </Navbar.Brand>
          <Nav.Link>
            Home
          </Nav.Link>
          <Nav.Link>
            Create
          </Nav.Link>
          <Nav.Link>
            Login/Signup
          </Nav.Link>
        </Navbar>
      </div>
    );
  }
}
