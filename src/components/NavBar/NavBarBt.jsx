
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBarBt() {

  


  return (
    <Navbar className='nav-cont' collapseOnSelect expand="lg" >

      <Container>
        <Link to = '/'>
          <Navbar.Brand className='logo'>Baimos</Navbar.Brand>
        </Link>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">

            <NavDropdown  title="Categories" id="collasible-nav-dropdown">
              
                <NavDropdown.Item className='cattitle' >
                  <NavLink to = '/categoria/emotes' className= 'link'>Emotes</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className='cattitle' >
                  <NavLink to = '/categoria/kitten' className= 'link'>Kitten</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className='cattitle' >
                  <NavLink to = '/categoria/pirate' className= 'link'>Pirate</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className='cattitle' >
                  <NavLink to = '/categoria/divine' className= 'link'>Divine</NavLink>
                </NavDropdown.Item>
      
            </NavDropdown>

          </Nav>

          <Nav>
            <Link to = '/cart'>
              <CartWidget />
            </Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavBarBt;