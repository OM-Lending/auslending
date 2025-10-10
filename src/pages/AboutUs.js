import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutImage from "../assets/AusB2.webp";
import heroImage from "../assets/AusB2.webp";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";

function AboutUs() {
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
          <h1 className="display-4 fw-bold">ALL ABOUT AUS LEADING</h1>
          <p className="lead">Your Trusted Property Investment Partner</p>
        </motion.div>
      </div>

      <Container fluid className="py-5 bg-light px-3 px-md-5">
        {/* Investment Combination Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="content-card mb-5 text-center"
        >
          <h3 className="section-title">
            Secure the Best Investment Combination!
          </h3>
          <div className="image-container d-inline-block my-4">
            <motion.img
              src={aboutImage}
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              alt="About Us"
              className="shadow-lg"
            />
          </div>
          <p className="text-muted">
            Since 2020, we've been helping Australians understand and navigate
            the complex process of investing in property. Our services help
            clients secure the financing for one of life's most significant
            purchases.
          </p>
          <p className="text-muted">
            We are committed to easing your concerns and addressing all your
            investment needs. Our tailored guidance empowers you with the
            knowledge and resources to make confident property investment
            decisions.
          </p>
          <button
            className="btn-custom mt-3"
            onClick={() => navigate("/contact-us")}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Commitment Section */}
        <Row className="mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="content-card-mission"
            >
              <h4 className="section-title">Our Commitment</h4>
              <div className="card-text-content mt-4">
                <p className="text-muted">
                  We're committed to making your investment journey smooth and
                  rewarding. Our experienced team provides strategies tailored
                  to your goals and resources.
                </p>
                <p className="text-muted">
                  With years of expertise in the Australian property market, we
                  understand the challenges and opportunities that come with
                  property investment. Our commitment extends beyond just
                  providing advice—we're your partners in building lasting
                  wealth.
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
              <h4 className="section-title">
                Empowering Your Investment Journey
              </h4>
              <div className="card-text-content mt-4">
                <p className="text-muted">
                  We equip you with tools and insights to make informed
                  decisions, guiding you through every stage of your property
                  investment journey.
                </p>
                <p className="text-muted">
                  From understanding market trends to securing the best
                  financing options, we provide comprehensive support that
                  empowers you to invest with confidence and achieve your
                  financial goals.
                </p>
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
          <h3 className="fw-bold mb-3">Contact Us Today</h3>
          <p className="mb-4">
            Let's start your journey toward smarter and more confident property
            investment.
          </p>
          <button
            className="btn-custom-light"
            onClick={() => navigate("/contact-us")}
          >
            Reach Out
          </button>
        </motion.div>
      </Container>
    </>
  );
}

export default AboutUs;
