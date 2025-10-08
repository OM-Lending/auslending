import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import privacyImage from "../assets/AusB1.jpeg";

function PrivacyPolicy() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container
    fluid
    className="p-5 text-center"
    style={{
      backgroundImage: `url(${privacyImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}
  >
    <div style={{ backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "10px", padding: "2rem" }}>
      {/* Title Section */}
      <motion.h1
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PRIVACY POLICY
      </motion.h1>

      <motion.h2
        className="text-secondary mb-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Honest. Reliable. Committed.
      </motion.h2>

      {/* Terms and Conditions Section */}
      <Row className="mt-5">
        <Col md={12}>
          <motion.div
            className="bg-white p-4 shadow-lg rounded mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="fw-bold text-dark">TERMS AND CONDITIONS</h4>
            <p className="text-muted">
              The commercial terms and conditions will include, among other things, details of product delivery, payment terms, credit limits, and deadlines in relation to your purchase of services and compensation. Please contact the Ausleading experts for the full version.
            </p>
            <Button variant="primary" onClick={() => navigate("/contact-us")}>Contact Us for Full Terms</Button>
          </motion.div>
        </Col>
      </Row>

      {/* Cookie Policy Section */}
      <Row className="mt-5">
        <Col md={12}>
          <motion.div
            className="bg-white p-4 shadow-lg rounded mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="fw-bold text-dark">COOKIE POLICY</h4>
            <p className="text-muted">
              Our website privacy policy will inform all users of any processing, collection, or sharing of personal information. This includes cookies. Cookies allow users to browse, shop, and view the site without logging in each time they visit.
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Customer Data Policy Section */}
      <Row className="mt-5">
        <Col md={12}>
          <motion.div
            className="bg-white p-4 shadow-lg rounded mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="fw-bold text-dark">CUSTOMER DATA POLICY</h4>
            <p className="text-muted">
              The business will protect the customer's personal information, which may include the customer's: name, signature, address, email, telephone number, date of birth, medical history, bank details, photographs and videos, IP address, and other relevant private content.
            </p>
          </motion.div>
        </Col>
      </Row>
    </div>
  </Container>
  );
}

export default PrivacyPolicy;