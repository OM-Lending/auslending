import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <Container fluid className="p-5 text-center bg-light">
      {/* Title Section */}
      <motion.h1
        className="fw-bold text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        LET'S TALK
      </motion.h1>

      {/* Contact Information Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-4 shadow-lg rounded mt-4"
      >
        <h3 className="fw-bold text-dark">Our customer service team is happy to help with any questions or requests.</h3>
        <p className="text-muted">
          Feel free to check if your enquiry has been answered in our Frequently Asked Questions.
        </p>
        <h4>Contact Information:</h4>
        <p>
          <strong>Email:</strong> <a href="mailto:info@ausleading.com.au">info@ausleading.com.au</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+61361707850">03 6170 7850</a>
        </p>
        <p>
          <strong>Address:</strong> <a>Level 2, 152 Macquarie St, Hobart TAS 7000</a>
        </p>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="mt-5 p-4 bg-primary text-white rounded shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Have Any Questions?</h3>
        <p>We're here to help! Reach out to our customer service team anytime.</p>
        <Button variant="light" href="mailto:info@ausleading.com.au">
          Email Us
        </Button>
      </motion.div>
    </Container>
  );
}

export default ContactUs;