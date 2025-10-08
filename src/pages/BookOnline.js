import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import consultationImage from "../assets/Aus4.JPG";
import newCustomerImage from "../assets/Aus2.jpg";
import currentClientImage from "../assets/Aus3.jpg";
import heroImage from "../assets/Aus8.jpg";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";

function BookOnline() {
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
          <h1 className="display-4 fw-bold">BOOK YOUR APPOINTMENT</h1>
          <p className="lead">Choose Your Consultation Type</p>
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
          <h3 className="fw-bold">Start Your Investment Journey Today</h3>
          <p className="text-muted mt-4">
            Select the appointment type that best suits your needs. Whether
            you're a new customer or an existing client, we're here to help you
            achieve your property investment goals.
          </p>
        </motion.div>

        {/* Booking Options Section */}
        <Row className="mb-5">
          {/* Consultation Appointment */}
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              className="content-card contact-card text-center h-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-card-content">
                <div className="image-container mb-4">
                  <img
                    src={consultationImage}
                    alt="Consultation Appointment"
                    className="img-fluid shadow-lg"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4 className="fw-bold">Consultation Appointment</h4>
                <p className="text-muted mt-3">
                  Schedule a one-on-one consultation to discuss your property
                  investment needs and explore opportunities.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          </Col>

          {/* New Customer Enquiries */}
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              className="content-card contact-card text-center h-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="contact-card-content">
                <div className="image-container mb-4">
                  <img
                    src={newCustomerImage}
                    alt="New Customer Enquiries"
                    className="img-fluid shadow-lg"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4 className="fw-bold">New Customer Enquiries</h4>
                <p className="text-muted mt-3">
                  Are you a new customer? Let's start the conversation and find
                  the best property options for you.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          </Col>

          {/* Current Clients */}
          <Col md={4}>
            <motion.div
              className="content-card contact-card text-center h-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <div className="contact-card-content">
                <div className="image-container mb-4">
                  <img
                    src={currentClientImage}
                    alt="Current Clients"
                    className="img-fluid shadow-lg"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h4 className="fw-bold">Current Clients</h4>
                <p className="text-muted mt-3">
                  If you're already a client, book your next appointment or
                  consultation here to continue your journey.
                </p>
              </div>
              <div className="contact-card-button">
                <button
                  className="btn-custom"
                  onClick={() => navigate("/contact-us")}
                >
                  Book Now
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
          <h3 className="fw-bold mb-3">Need Help Choosing?</h3>
          <p className="mb-4">
            Not sure which appointment type is right for you? Contact us and
            we'll help you find the perfect solution for your property
            investment needs.
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

export default BookOnline;
