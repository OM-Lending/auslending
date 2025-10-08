import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import investImg from "../assets/Aus10.jpg";
import financeImg from "../assets/Aus11.jpg";
import supportImg from "../assets/Aus12.jpg";
import { useNavigate } from "react-router-dom";

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
        "From property selection and due diligence to settlement, we’re with you every step of the way. Our team assists with market research, legal coordination, and liaising with agents to ensure a smooth and successful investment journey.",
      image: supportImg,
    },
  ];

  const navigate = useNavigate();

  return (
    <Container fluid className="p-5 text-center bg-light">
      <motion.h1
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      <Row className="mt-5">
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <motion.div
              className="card-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card className="shadow-lg rounded h-100">
                <Card.Img variant="top" src={service.image} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold text-dark">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.description}</Card.Text>
                  <Button variant="primary" onClick={() => navigate("/contact-us")}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;