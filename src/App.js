// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'; // ✅ Ensure you have this component
import BhairavaaSection from './BhairavaaLandingPage';
import Gallery from "./Gallery";
import './App.css';

const Home = () => (
  <>
    <BhairavaaSection />
  </>
);

const App = () => {
  return (
    <Router>
      {/* Navbar shows on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* Footer shows on all pages */}
      <Footer />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919791603745"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </Router>
  );
};

export default App;
