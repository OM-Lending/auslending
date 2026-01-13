import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row className="py-5">
          {/* Company Info */}
          <Col md={4} className="mb-4 mb-md-0">
            <div className="footer-brand mb-3">
              <img
                src={`${process.env.PUBLIC_URL}/AusLogo.png`}
                alt="Ausleading Logo"
                width="80"
                height="40"
                className="mb-2"
              />
              <h5>AUS LEADING ENTERPRISES</h5>
            </div>
            <p className="text-light-gray">
              Your trusted partner in property investment. From start to finish,
              we're here to help you achieve your financial goals.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/our-info" className="footer-link">
                  Our Info
                </Link>
              </li>
              <li>
                <Link to="/book-online" className="footer-link">
                  Book Online
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5 className="footer-heading mb-3">Contact Us</h5>
            <ul className="footer-contact list-unstyled">
              <li className="mb-2">
                <i className="contact-icon">📍</i>
                <span className="text-light-gray">
                  Level 2, 162 Macquarie St
                  <br />
                  Hobart TAS 7000
                </span>
              </li>
              <li className="mb-2">
                <i className="contact-icon">📧</i>
                <a href="mailto:info@ausleading.com.au" className="footer-link">
                  info@ausleading.com.au
                </a>
              </li>
              <li className="mb-2">
                <i className="contact-icon">📞</i>
                <a href="tel:+61361707850" className="footer-link">
                  03 6170 7850
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="border-top border-secondary pt-3 pb-3">
          <Col className="text-center">
            <p className="mb-0 text-light-gray">
              &copy; {new Date().getFullYear()} AUS LEADING ENTERPRISES. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
