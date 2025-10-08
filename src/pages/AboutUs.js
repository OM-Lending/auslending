import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutImage from "../assets/AusB2.jpg";
import heroImage from "../assets/AusB2.jpg"; // same or new image for hero
import { useNavigate } from "react-router-dom";
import "../App.css"; // Add custom styles if needed

function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          position: "relative",
          color: "white",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <motion.h1
            className="text-white fw-bold text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ALL ABOUT AUS LEADING
          </motion.h1>
        </div>
      </div>

      <Container fluid className="py-5 bg-light">
        {/* Investment Combination Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white py-5 px-4 px-md-5 shadow-lg rounded mb-5"
          style={{ maxWidth: "100%", margin: "0 auto", textAlign:"center"}}
        >
          <h3 className="fw-bold text-dark">Secure the Best Investment Combination!</h3>
          <motion.img
            src={aboutImage}
            style={{ width: "100%", maxWidth: "600px", height: "auto", marginBottom: "20px" }}
            alt="About Us"
            className="rounded shadow-sm"
          />
          <p className="text-muted">
            Since 2020, we’ve been helping Australians understand and navigate the complex process of investing in property. Our services help clients secure the financing for one of life’s most significant purchases.
          </p>
          <p className="text-muted">
            We are committed to easing your concerns and addressing all your investment needs. Our tailored guidance empowers you with the knowledge and resources to make confident property investment decisions.
          </p>
          <Button variant="primary" className="mt-3" onClick={() => navigate("/contact-us")}>
            Get in Touch
          </Button>
        </motion.div>

        {/* Commitment Section */}
        <Row className="mt-5 px-md-5">
          <Col md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-4 shadow-lg rounded h-100"
            >
              <h4 className="fw-bold text-dark">Our Commitment</h4>
              <p className="text-muted">
                We’re committed to making your investment journey smooth and rewarding. Our experienced team provides strategies tailored to your goals and resources.
              </p>
            </motion.div>
          </Col>

          <Col md={6} className="mb-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white p-4 shadow-lg rounded h-100"
            >
              <h4 className="fw-bold text-dark">Empowering Your Property Investment Journey</h4>
              <p className="text-muted">
                We equip you with tools and insights to make informed decisions, guiding you through every stage of your property investment journey.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* CTA Section */}
        <motion.div
          className="mt-5 p-5 bg-primary text-white rounded shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Contact Us Today</h3>
          <p className="mb-3">
            Let’s start your journey toward smarter and more confident property investment.
          </p>
          <Button variant="light" onClick={() => navigate("/contact-us")}>
            Reach Out
          </Button>
        </motion.div>
      </Container>
    </>
  );
}

export default AboutUs;