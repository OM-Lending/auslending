import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import investImg from "../assets/Aus10.webp";
import financeImg from "../assets/Aus11.webp";
import supportImg from "../assets/Aus12.webp";
import heroImage from "../assets/Aus7.webp";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";

function Services() {
  const services = [
    {
      title: "Investment Property Strategy & Consultation",
      description:
        "We work with you to develop a customised investment plan based on your goals, budget, and risk appetite. Whether you're a first-time investor or expanding your portfolio, we provide data-driven insights to help you invest wisely.",
      image: investImg,
    },
    {
      title: "Financing & Loan Assistance",
      description:
        "Navigating property loans can be overwhelming — we simplify the process by helping you compare lenders, secure pre-approvals, and understand your borrowing power. Our experts ensure you get the best finance options tailored to your circumstances.",
      image: financeImg,
    },
    {
      title: "End-to-End Property Acquisition Support",
      description:
        "From property selection and due diligence to settlement, we're with you every step of the way. Our team assists with market research, legal coordination, and liaising with agents to ensure a smooth and successful investment journey.",
      image: supportImg,
    },
  ];

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
          <h1 className="display-4 fw-bold">OUR SERVICES</h1>
          <p className="lead">Expert Property Investment Solutions</p>
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
          <h3 className="fw-bold">
            Comprehensive Property Investment Services
          </h3>
          <p className="text-muted mt-4">
            From strategy to settlement, we provide end-to-end support for your
            property investment journey. Our team of experts is dedicated to
            helping you achieve your financial goals through smart property
            investment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <Row className="mb-5">
          {services.map((service, index) => (
            <Col md={4} className="mb-4 mb-md-0" key={index}>
              <motion.div
                className="content-card contact-card h-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="contact-card-content">
                  <div className="image-container mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="img-fluid shadow-lg"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h4 className="fw-bold">{service.title}</h4>
                  <p className="text-muted mt-3">{service.description}</p>
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
          ))}
        </Row>

        {/* CTA Section */}
        <motion.div
          className="cta-section text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="fw-bold mb-3">
            Ready to Start Your Investment Journey?
          </h3>
          <p className="mb-4">
            Contact us today to discuss your property investment goals and
            discover how our services can help you build lasting wealth.
          </p>
          <button
            className="btn-custom-light"
            onClick={() => navigate("/contact-us")}
          >
            Get Started
          </button>
        </motion.div>
      </Container>
    </>
  );
}

export default Services;
