import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <header className="mb-2">
      <Navbar bg="dark" variant="dark" >
        <LinkContainer to="/">
          <Navbar.Brand>HomePage</Navbar.Brand>
        </LinkContainer>
       </Navbar>
    </header>
  );
};

export default Header;
