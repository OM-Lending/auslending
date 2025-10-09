import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Link to="/" className="navbar-brand navbar-brand-custom">
          <img
            src={`${process.env.PUBLIC_URL}/AusLogo.png`}
            alt="AUS LEADING Logo"
            width="80"
            height="40"
            className="brand-logo"
          />
          <span className="brand-text">AUSLEADING</span>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="custom-nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="custom-nav-link">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/our-info" className="custom-nav-link">
              Our Info
            </Nav.Link>
            <Nav.Link as={Link} to="/book-online" className="custom-nav-link">
              Book Online
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="custom-nav-link">
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/privacy-policy"
              className="custom-nav-link"
            >
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
