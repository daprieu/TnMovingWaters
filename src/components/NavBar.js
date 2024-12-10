import React from "react";
import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

export const MWNavBar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        className="navbar"
        sticky="top"
      >
        <Container className="d-flex">
          <Navbar.Brand href="/">
            <img
              className="logo"
              alt="Tennessee Moving Waters Logo"
              src="https://images.prismic.io/alexprieu/49f0dd6b-a29f-4ebd-975e-1da11d738b70_TNMW_stkaoa.png?auto=compress,format"
              width={100}
              height={27.9167}
            />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="" id="responsive-navbar-nav ">
            <Col sm>
              <Nav className="linktext">
                <Nav.Link href="/fishing-trip-options">Fishing Trips</Nav.Link>
                <Nav.Link href="/boats">Boats</Nav.Link>
                <Nav.Link href="/guides">Guides</Nav.Link>
                <Nav.Link className="text-right" href="/contact-us">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Col>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
