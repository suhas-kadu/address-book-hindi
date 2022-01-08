import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap/";
import Link from "../../routing/Link";

const ReactNavbar = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/" className="text-dark text-decoration-none">
              पता पुस्तिका वेबसाइट
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Link
                href="/"
                className="nav-link text-decoration-none text-secondary"
              >
                होम
              </Link>
              <Link
                href="/insert"
                className="nav-link text-decoration-none text-secondary"
              >
                अपने पते डालें
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ReactNavbar;
