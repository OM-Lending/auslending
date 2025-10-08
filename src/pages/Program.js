import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import program1 from "../assets/Aus10.jpg";
import program2 from "../assets/Aus11.jpg";
import program3 from "../assets/Aus12.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ProgramsPage() {
  const programs = [
    {
      title: "Invest Smarter Today",
      duration: "21 Days",
      participants: "10 Participants",
      image: program1
    },
    {
      title: "Marketing Your Product",
      duration: "7 Days",
      participants: "17 Participants",
      image: program2
    },
    {
      title: "How To Start Your Business",
      duration: "10 Days",
      participants: "29 Participants",
      image: program3
    },
  ];

  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container fluid className="p-5 text-center bg-light">
      <motion.h1
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Programs
      </motion.h1>

      {/* Programs Cards Section */}
      <Row className="mt-5">
        {programs.map((program, index) => (
          <Col md={4} className="mb-4" key={index}>
            <motion.div
              className="card-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Card className="shadow-lg rounded">
                <Card.Body>
                  <Card.Title className="fw-bold text-dark">{program.title}</Card.Title>
                  <Card.Img src={program.image} style={{height: '300px'}}/>
                  <Card.Text className="text-muted">
                    Duration: {program.duration}
                    <br />
                    Participants: {program.participants}
                    <br />
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate("/contact-us")}>More Details</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProgramsPage;