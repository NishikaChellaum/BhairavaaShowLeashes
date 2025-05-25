import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/Bhairavaa.css';
import { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import hero1 from './assets/hero1.png';
import hero2 from './assets/hero2.png';
import hero3 from './assets/hero3.png';
import hero4 from './assets/hero4.png';
import yourAboutImage from './assets/logo.png';
import bannerBottom from './assets/banner.png';
//import { Carousel } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const BhairavaaSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3znmkym',     // Replace with your EmailJS service ID
        'template_qasr9ud',    // Replace with your EmailJS template ID
        form.current,
        'VGNL2PRv-LEepSOX-'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };
    // Customer Reviews state and data
  const reviews = [
    {
      name: "Anjali K.",
      text: "Absolutely love the leash quality! My dog walks in style and comfort.",
    },
    {
      name: "Rahul M.",
      text: "The craftsmanship is top-notch. Got a custom show leash and it was perfect!",
    },
    {
      name: "Priya S.",
      text: "Super friendly service and beautiful packaging. Highly recommended!",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="bhairavaa-bg text-dark" id="bhairavaa">
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={hero1} className="d-block w-100 hero-img" alt="Hero1" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="section-title text-danger mb-3">Unleash the Power</h2>
              <p className="text-dark">Premium show leashes for champions</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={hero2} className="d-block w-100 hero-img" alt="Hero2" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="section-title text-danger mb-3">Elegance & Control</h1>
              <p className="text-dark">Designed for show excellence</p>
            </div>
         </div>
         <div className="carousel-item">
            <img src={hero3} className="d-block w-100 hero-img" alt="Hero3" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="section-title text-danger mb-3">Elegance & Control</h1>
              <p className="text-dark">Designed for show excellence</p>
            </div>
         </div>
          <div className="carousel-item">
            <img src={hero4} className="d-block w-100 hero-img" alt="Hero4" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="section-title text-danger mb-3">Elegance & Control</h1>
              <p className="text-dark">Designed for show excellence</p>
            </div>
         </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

     {/* About Us Section */}
<section className="py-5 container">
  <h2 className="section-title text-danger mb-4 text-center">About Us</h2>
  <div className="row align-items-center">
    {/* Left Column: Text */}
    <div className="col-md-6">
      <p className="subheading">Unleashing Style & Strength</p>
      <p>
        Founded in 2016, Bhairavaa Show Leashes is a proudly Indian brand specializing in handcrafted dog show leashes, 
        walking leashes, and collars. Our passion for quality and performance drives us to create elegant, durable, and 
        comfortable gear tailored for show dogs and everyday companions alike. With a deep commitment to craftsmanship and 
        customization, we offer a range of premium materials and unique designs that highlight both style and functionality. 
        Whether you're in the show ring or on a daily walk, Bhairavaa ensures your dog stands out with confidence and class.
      </p>
    </div>
    {/* Right Column: Image */}
    <div className="col-md-6 text-center">
      <img
        src={yourAboutImage} // Define this above
        alt="About Bhairavaa"
        className="img-fluid rounded"
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />
    </div>
  </div>

  {/* Stats Section */}
  <div className="row text-center mt-5 justify-content-center">
    {[
      { icon: "bi-people-fill", number: "500+", label: "Happy Customers & Pets", type: "bootstrap" },
      
      { icon: "bi-chat-left-dots-fill", number: "200+", label: "Customer Reviews", type: "bootstrap" },
      { icon: "bi-headset", number: "24/7", label: "Customer Support", type: "bootstrap" },
    ].map((item, idx) => (
      <div className="col-6 col-md-3 mb-4" key={idx}>
        <div className="stat-box rounded-4 shadow p-4 h-100 bg-light">
          <div
            className="d-inline-flex justify-content-center align-items-center mb-3 rounded-circle stat-icon"
            style={{
              backgroundColor: '#b30000',
              width: '60px',
              height: '60px',
            }}
          >
            {item.type === "bootstrap" ? (
              <i className={`${item.icon} text-white fs-4`}></i>
            ) : (
              <i className={`${item.icon} text-white fs-4`}></i>
            )}
          </div>
          <h4 className="mb-1 fw-bold">{item.number}</h4>
          <p className="mb-0">{item.label}</p>
        </div>
      </div>
    ))}
  </div>
</section>

   {/* Customer Reviews Section */}
      <section className="py-5" id="customer-reviews">
        <h2 className="section-title text-danger mb-4 text-center">
          What Our Customers Say
        </h2>
        <div className="container">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
            interval={3000}
            fade
          >
            {reviews.map((review, idx) => (
              <Carousel.Item key={idx}>
                <div className="review-card mx-auto text-center p-4 rounded">
                  <i
                    className="bi bi-chat-quote-fill review-icon mb-3"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p className="fs-5 fst-italic">"{review.text}"</p>
                  <h5 className="mt-3 text-danger fw-bold">{review.name}</h5>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          
        </div>
      </section>


      {/* Contact Us Section */}
      <section id="contact" className="py-5 container">
        <h2 className="section-title text-danger text-center mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="row g-3">
          <div className="col-md-6">
            <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-12">
            <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-danger btn-red neon-border">Send Message</button>
          </div>
        </form>
      </section>
      <img src={bannerBottom} alt="..." className="img-fluid w-100" />

      {/* Footer */}
      <section id="footer">
 <footer className="footer-section text-center py-4 mt-0">

    <div className="social-icons mb-3">
      <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="mailto:contact@bhairavaa.com" className="social-icon" aria-label="Email">
        <i className="bi bi-envelope-fill"></i>
      </a>
      <a href="tel:+1234567890" className="social-icon" aria-label="Call">
        <i className="bi bi-telephone-fill"></i>
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>

    <div className="mb-3">
      <a
        href="https://www.google.com/maps/place/Bhairavaa+show+leashes,..."
        target="_blank"
        rel="noreferrer"
        className="text-white"
        aria-label="Google Maps Location"
      >
        📍 123 Bhairavaa Street, Showtown, City, Country
      </a>
    </div>

    <p className="fw-bold mb-0">© 2025 Bhairavaa Show Leashes</p>
  </footer>
</section>

    </div>
  );
};

export default BhairavaaSection;
