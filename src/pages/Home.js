import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeImage from "../assets/AusBack.webp";
import homeImage1 from "../assets/AusB1.webp";
import homeImage2 from "../assets/AusB5.webp";
import homeImage3 from "../assets/Aus5.webp";
import homeImage4 from "../assets/Aus7.webp";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${homeImage})`,
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
            backgroundColor: "rgba(86, 81, 81, 0.6)",
            zIndex: 1,
          }}
        ></div>
        <motion.div
          className="z-2 position-relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">AUS LEADING ENTERPRISES</h1>
          <p className="lead">From Start to Finish</p>
          <button
            className="btn-custom-light"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </button>
        </motion.div>
      </div>

      {/* Content Section */}
      <Container fluid className="bg-light py-5 px-3 px-md-5">
        {/* Property Investment */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={homeImage1}
                alt="Property Investment"
                className="img-fluid shadow-lg"
                style={{ width: "100%" }}
              />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="p-3"
            >
              <h3 className="section-title">OWN YOUR DREAM PROPERTY</h3>
              <p className="text-muted mt-4">
                At Ausleading, we're experienced investors who understand the
                benefits of long-term property investment.
              </p>
              <button
                className="btn-custom mt-3"
                onClick={() => navigate("/our-info")}
              >
                Learn More
              </button>
            </motion.div>
          </Col>
        </Row>

        {/* How We Can Serve You */}
        <motion.div
          className="content-card mb-5 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">HOW WE CAN SERVE YOU</h3>
          <p className="text-muted mt-4">
            We have partnered with thousands of Australians to help them build a
            brighter future through property investment.
          </p>
          <div className="image-container d-inline-block my-4">
            <motion.img
              src={homeImage2}
              alt="Service Illustration"
              style={{ maxWidth: "400px", width: "100%", height: "auto" }}
              className="shadow-lg"
            />
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <Row className="mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              className="content-card-mission"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h4 className="section-title">OUR MISSION</h4>
              <div className="image-container my-4">
                <img
                  src={homeImage3}
                  alt="Our Mission"
                  className="img-fluid shadow-lg"
                />
              </div>
              <div className="card-text-content">
                <p className="text-muted">
                  Empower Australians with knowledge, resources, and expert
                  guidance to achieve long-term financial wellbeing through
                  property investment.
                </p>
                <p className="text-muted">
                  We provide tailored solutions and step-by-step support to
                  simplify the investment journey and help clients build lasting
                  wealth.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              className="content-card-mission"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h4 className="section-title">OUR APPROACH</h4>
              <div className="image-container my-4">
                <img
                  src={homeImage4}
                  alt="Our Approach"
                  className="img-fluid shadow-lg"
                />
              </div>
              <div className="card-text-content">
                <p className="text-muted">
                  Property investment should be simple, transparent, and
                  stress-free. We offer education, guidance, and lifetime
                  support.
                </p>
                <p className="text-muted">
                  From first investment to portfolio growth, we're your
                  strategic partner in achieving financial freedom.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Call to Action */}
        <motion.div
          className="cta-section text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="fw-bold mb-3">GET THE BEST DEAL</h3>
          <p className="mb-4">
            We help you invest with confidence through expert insights and local
            knowledge.
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

export default Home;
