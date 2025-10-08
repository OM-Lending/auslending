import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import consultationImage from "../assets/Aus4.JPG"; // Replace with actual image path
import newCustomerImage from "../assets/Aus2.jpg"; // Replace with actual image path
import currentClientImage from "../assets/Aus3.jpg"; // Replace with actual image path
import { useNavigate } from "react-router-dom"; // Import useNavigate

function BookOnline() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid className="p-5 text-center bg-light">
      {/* Title Section */}
      <motion.h1
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BOOK ONLINE
      </motion.h1>

      {/* Introduction Section */}
      <motion.h2
        className="text-secondary mb-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Choose Your Appointment Type
      </motion.h2>

      {/* Booking Options Section */}
      <Row className="mt-5">
        {/* Consultation Appointment */}
        <Col md={4} className="mb-4">
          <motion.div
            className="bg-white p-4 shadow-lg rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={consultationImage}
              alt="Consultation Appointment"
              className="img-fluid rounded mb-3"
              style={{height: '400px'}}
            />
            <h4 className="fw-bold text-dark">Consultation Appointment</h4>
            <p className="text-muted">
              Schedule a one-on-one consultation to discuss your property investment needs.
            </p>
            <Button variant="primary" onClick={() => navigate("/contact-us")}>Book Now</Button>
          </motion.div>
        </Col>

        {/* New Customer Enquiries */}
        <Col md={4} className="mb-4">
          <motion.div
            className="bg-white p-4 shadow-lg rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={newCustomerImage}
              alt="New Customer Enquiries"
              className="img-fluid rounded mb-3"
              style={{height: '400px'}}
            />
            <h4 className="fw-bold text-dark">New Customer Enquiries</h4>
            <p className="text-muted">
              Are you a new customer? Let’s start the conversation and find the best property options for you.
            </p>
            <Button variant="primary" onClick={() => navigate("/contact-us")}>Book Now</Button>
          </motion.div>
        </Col>

        {/* Current Clients */}
        <Col md={4} className="mb-4">
          <motion.div
            className="bg-white p-4 shadow-lg rounded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={currentClientImage}
              alt="Current Clients"
              className="img-fluid rounded mb-3"
              style={{height: '400px'}}
            />
            <h4 className="fw-bold text-dark">Current Clients</h4>
            <p className="text-muted">
              If you're already a client, book your next appointment or consultation here.
            </p>
            <Button variant="primary" onClick={() => navigate("/contact-us")}>Book Now</Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookOnline;