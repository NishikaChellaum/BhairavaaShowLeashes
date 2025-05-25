import React from 'react';
import './styles/Bhairavaa.css'; // Optional: create for custom styles

const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer-section text-center py-4 mt-0 bg-dark text-white">
        {/* Social Icons */}
        <div className="social-icons mb-3">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="social-icon me-3" aria-label="Instagram">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="social-icon me-3" aria-label="Facebook">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="mailto:contact@bhairavaa.com" className="social-icon me-3" aria-label="Email">
            <i className="bi bi-envelope-fill fs-4"></i>
          </a>
          <a href="tel:+1234567890" className="social-icon me-3" aria-label="Call">
            <i className="bi bi-telephone-fill fs-4"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
            <i className="bi bi-whatsapp fs-4"></i>
          </a>
        </div>

        {/* Location Link */}
        <div className="mb-3">
          <a
            href="https://www.google.com/maps/place/Bhairavaa+show+leashes"
            target="_blank"
            rel="noreferrer"
            className="text-white text-decoration-none"
            aria-label="Google Maps Location"
          >
            📍 123 Bhairavaa Street, Showtown, City, Country
          </a>
        </div>

        {/* Copyright */}
        <p className="fw-bold mb-0">© 2025 Bhairavaa Show Leashes</p>
      </footer>
    </section>
  );
};

export default Footer;
