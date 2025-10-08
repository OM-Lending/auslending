import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OurInfoImage from "../assets/AusB4.jpg";
import OurInfoImage2 from "../assets/AusB5.jpg";
import heroImage from "../assets/Aus6.jpg";
import "../pages/Home.css";

function OurInfo() {
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
          <h1 className="display-4 fw-bold">OUR INVESTMENT SOLUTIONS</h1>
          <p className="lead">Your Trusted Property Investment Planner</p>
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
          <h3 className="fw-bold">
            Investing in Quality Homes for Your Family
          </h3>
          <p className="text-muted mt-4">
            With Ausleading, you're not just investing in a property, you're
            investing in a quality home for your entire family. When you turn to
            us for professional help with your property investment or rental,
            you'll get one of the safest property investments in Australia —
            with no rental obligations and guaranteed* rental income for the
            entire term of the lease.
          </p>
        </motion.div>

        {/* Property Lease Section */}
        <Row className="mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="content-card-mission"
            >
              <h4 className="fw-bold">Budget with Confidence</h4>
              <div className="image-container my-4">
                <img
                  src={OurInfoImage2}
                  alt="Budget with Confidence"
                  className="img-fluid shadow-lg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card-text-content">
                <p className="text-muted">
                  At AusLeading, we empower you to plan your finances with
                  certainty. With our guaranteed* rental income, you can invest
                  confidently, knowing that your returns are secure for the
                  entire duration of your tenancy. This stability allows you to
                  manage expenses, grow your portfolio, and work toward
                  long-term financial success without unexpected disruptions.
                </p>
                <p className="text-muted">
                  Our commitment to transparency and reliability ensures that
                  you can budget with peace of mind, making property investment
                  a stress-free and rewarding experience.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="content-card-mission"
            >
              <h4 className="fw-bold">Flexible Lease Terms</h4>
              <div className="image-container my-4">
                <img
                  src={OurInfoImage}
                  alt="Flexible Lease Terms"
                  className="img-fluid shadow-lg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card-text-content">
                <p className="text-muted">
                  At AusLeading, we understand that every investor's needs are
                  unique. That's why we offer flexible lease terms, allowing you
                  to choose a property that aligns perfectly with your financial
                  goals and investment strategy. Whether you're looking for a
                  short-term lease to test the market or a longer-term
                  commitment to secure stable returns, we provide options that
                  suit your lifestyle and investment preferences.
                </p>
                <p className="text-muted">
                  Our flexibility ensures that you can adapt to changing
                  circumstances while maintaining a steady income stream, giving
                  you greater control and confidence over your property
                  investment journey. With AusLeading, you'll have the freedom
                  to select the lease term that works best for you, ensuring a
                  tailored and seamless investment experience.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Properties for Families Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="content-card mb-5 text-center"
        >
          <h3 className="fw-bold">
            Properties Reflecting Australian Family Needs
          </h3>
          <p className="text-muted mt-4">
            The properties we lease from investors reflect the needs of
            Australian families. We carefully select properties that provide
            comfortable, safe, and functional living spaces suitable for modern
            family life.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="fw-bold mb-3">Comprehensive Property Services</h3>
          <p className="mb-4">
            We offer a range of property-related services throughout the lease
            term to ensure your investment remains secure and profitable.
          </p>
          <button
            className="btn-custom-light"
            onClick={() => navigate("/contact-us")}
          >
            Learn More
          </button>
        </motion.div>
      </Container>
    </>
  );
}

export default OurInfo;
