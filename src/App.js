import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurInfo from "./pages/OurInfo";
import BookOnline from "./pages/BookOnline";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/our-info" element={<OurInfo />} />
                <Route path="/book-online" element={<BookOnline />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    );
}

export default App;