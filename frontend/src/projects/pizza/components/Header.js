import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand> React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
