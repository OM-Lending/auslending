import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import OurInfoImage from "../assets/AusB4.jpg";
import OurInfoImage2 from "../assets/AusB5.jpg";

function OurInfo() {
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
        ALL ABOUT US
      </motion.h1>

      {/* Sub-Title Section */}
      <motion.h2
        className="text-secondary mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Your Trusted Property Investment Planner
      </motion.h2>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-4 shadow-lg rounded mb-5"
      >
        <h3 className="fw-bold text-dark">
          With Ausleading, you're not just investing in a property, you're investing in a quality home for your entire family.
        </h3>
        <p className="text-muted">
          When you turn to us for any professional help with your property investment or rental, you'll get one of the safest property investments in Australia — with no rental obligations and guaranteed* rental income for the entire term of the lease.
        </p>
      </motion.div>

      {/* Property Lease Section */}
      <Row className="mt-5">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-4 shadow-lg rounded"
          >
            <h3 className="fw-bold text-dark">Budget with Confidence</h3>
            <motion.img 
                    src={OurInfoImage2} 
                    style={{ width: "100%", maxWidth: "400px", height: "auto" }} 
                    alt="Property Image at Home page"
                />
<p className="text-muted">
  At AusLeading, we empower you to plan your finances with certainty. With our guaranteed* rental income, you can invest confidently, knowing that your returns are secure for the entire duration of your tenancy. This stability allows you to manage expenses, grow your portfolio, and work toward long-term financial success without unexpected disruptions.
</p>
<p className="text-muted">
  Our commitment to transparency and reliability ensures that you can budget with peace of mind, making property investment a stress-free and rewarding experience.
</p>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-4 shadow-lg rounded"
          >
            <h3 className="fw-bold text-dark">Flexible Lease Terms</h3>
            <motion.img 
                    src={OurInfoImage} 
                    style={{ width: "100%", maxWidth: "400px", height: "auto" }} 
                    alt="Property Image at Home page"
                />
<p className="text-muted">
  At AusLeading, we understand that every investor’s needs are unique. That’s why we offer flexible lease terms, allowing you to choose a property that aligns perfectly with your financial goals and investment strategy. Whether you’re looking for a short-term lease to test the market or a longer-term commitment to secure stable returns, we provide options that suit your lifestyle and investment preferences.
</p>
<p className="text-muted">
  Our flexibility ensures that you can adapt to changing circumstances while maintaining a steady income stream, giving you greater control and confidence over your property investment journey. With AusLeading, you’ll have the freedom to select the lease term that works best for you, ensuring a tailored and seamless investment experience.
</p>
          </motion.div>
        </Col>
      </Row>

      {/* Properties for Families Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-4 shadow-lg rounded mt-5"
      >
        <h3 className="fw-bold text-dark">Properties Reflecting Australian Family Needs</h3>
        <p className="text-muted">
          The properties we lease from investors reflect the needs of Australian families.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-5 p-4 bg-primary text-white rounded shadow-lg"
      >
        <h3>Comprehensive Property Services</h3>
        <p className="text-light">
          We offer a range of property-related services throughout the lease term to ensure your investment remains secure and profitable.
        </p>
        <Button variant="light" onClick={() => navigate("/contact-us")}>Learn More</Button>
      </motion.div>
    </Container>
  );
}

export default OurInfo;