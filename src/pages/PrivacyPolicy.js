import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Aus10.webp";
import "../pages/Home.css";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>
        <motion.div
          className="z-2 position-relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">PRIVACY POLICY</h1>
          <p className="lead">Honest. Reliable. Committed.</p>
        </motion.div>
      </div>

      <Container fluid className="py-5 bg-light px-3 px-md-5">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="content-card mb-5 text-center"
        >
          <h3 className="fw-bold">Your Privacy Matters to Us</h3>
          <p className="text-muted mt-4">
            At AUS LEADING ENTERPRISES, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            policy outlines how we collect, use, and safeguard your data.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <Row className="mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              className="content-card contact-card h-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">TERMS AND CONDITIONS</h4>
                <p className="text-muted mt-4">
                  The commercial terms and conditions will include details of
                  product delivery, payment terms, credit limits, and deadlines
                  in relation to your purchase of services.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  View Full Terms
                </button>
              </div>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              className="content-card contact-card h-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">COOKIE POLICY</h4>
                <p className="text-muted mt-4">
                  Our website privacy policy informs all users of any
                  processing, collection, or sharing of personal information
                  including cookies. We use cookies to enhance your browsing
                  experience.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              className="content-card contact-card h-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">CUSTOMER DATA POLICY</h4>
                <p className="text-muted mt-4">
                  We protect your personal information including name, address,
                  email, telephone number, bank details, and other private
                  content with industry-standard security measures.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* CTA Section */}
        <motion.div
          className="cta-section text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="fw-bold mb-3">Questions About Our Privacy Policy?</h3>
          <p className="mb-4">
            If you have any questions or concerns about our privacy practices,
            please don't hesitate to contact us. We're here to help and ensure
            your peace of mind.
          </p>
          <button
            className="btn-custom-light"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </motion.div>
      </Container>
    </>
  );
}

export default PrivacyPolicy;
