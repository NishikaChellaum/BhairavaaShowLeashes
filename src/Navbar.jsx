import React from 'react';
import logo from './assets/logo.png'; // Import your logo image here
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#top">
  <img
    src={logo}
    alt="Bhairavaa Logo"
    className="navbar-logo me-3"
  />
  <div className="brand-text d-flex flex-column">
    <h3 className="mb-0">Bhairavaa Show Leashes</h3>
    <h4 className="mb-0 tagline">Handmade Dog Show Leashes</h4>
  </div>
</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#bhairavaa">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
