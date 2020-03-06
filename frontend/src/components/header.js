import React from "react";
import { Navbar, Nav} from "react-bootstrap";




function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">MightyDragon</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/account-dragons">My Dragons</Nav.Link>
        <Nav.Link href="/public-dragons">Public Dragons</Nav.Link>
   
        
      </Nav>
    </Navbar>
  );
}

export default (Header);
