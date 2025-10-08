import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                <img
                   src={`${process.env.PUBLIC_URL}/AusLogo.png`}
                   alt="Optwise Group Logo"
                   width="80" // Adjust as needed
                   height="40"
                   className="d-inline-block align-top me-2"
                 />
                 Ausleading
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/our-info">Our Info</Nav.Link>
                        <Nav.Link as={Link} to="/book-online">Book Online</Nav.Link>
                        <Nav.Link as={Link} to="/privacy-policy">Privacy Policy</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;