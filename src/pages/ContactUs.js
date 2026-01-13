import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import contactHeroImage from "../assets/AusB3.webp";
import "../pages/Home.css";

function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${contactHeroImage})`,
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
          <h1 className="display-4 fw-bold">LET'S TALK</h1>
        </motion.div>
      </div>

      <Container fluid className="py-5 bg-light px-3 px-md-5">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="content-card mb-5 text-center"
        >
          <h3 className="fw-bold">Get in Touch with Our Team</h3>
          <p className="text-muted mt-4">
            Our customer service team is happy to help with any questions or
            requests. Whether you're ready to start your property investment
            journey or need guidance on your next step, we're here to assist
            you.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <Row className="mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="content-card contact-card text-center h-100"
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">Email Us</h4>
                <p className="text-muted mt-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a
                  href="mailto:info@ausleading.com.au"
                  className="text-muted text-decoration-none"
                >
                  info@ausleading.com.au
                </a>
              </div>
              <div className="contact-card-button">
                <a
                  href="mailto:info@ausleading.com.au"
                  className="btn-custom-outline"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="content-card contact-card text-center h-100"
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">Call Us</h4>
                <p className="text-muted mt-4">
                  Speak with our experts during business hours.
                </p>
                <a
                  href="tel:+61361707850"
                  className="text-muted text-decoration-none"
                >
                  03 6170 7850
                </a>
              </div>
              <div className="contact-card-button">
                <a href="tel:+61361707850" className="btn-custom-outline">
                  Call Now
                </a>
              </div>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="content-card contact-card text-center h-100"
            >
              <div className="contact-card-content">
                <h4 className="fw-bold">Visit Us</h4>
                <p className="text-muted mt-4">
                  Come visit our office in Hobart.
                </p>
                <p className="text-muted">
                  Level 2, 162 Macquarie St
                  <br />
                  Hobart TAS 7000
                </p>
              </div>
              <div className="contact-card-button">
                <a
                  href="https://maps.google.com/?q=Level+2,+152+Macquarie+St,+Hobart+TAS+7000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom-outline"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Office Hours Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="content-card mb-5 text-center"
        >
          <h4 className="fw-bold">Office Hours</h4>
          <Row className="mt-4">
            <Col md={6} className="mb-3">
              <p className="text-muted mb-1">
                <strong>Monday - Friday</strong>
              </p>
              <p className="text-muted">9:00 AM - 5:00 PM</p>
            </Col>
            <Col md={6}>
              <p className="text-muted mb-1">
                <strong>Saturday - Sunday</strong>
              </p>
              <p className="text-muted">Closed</p>
            </Col>
          </Row>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
          <p className="mb-4">
            Let's discuss your property investment goals and create a plan that
            works for you.
          </p>
          <a href="mailto:info@ausleading.com.au" className="btn-custom-light">
            Schedule a Consultation
          </a>
        </motion.div>
      </Container>
    </>
  );
}

export default ContactUs;
