import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import hero1 from './assets/hero1.png'
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: hero1,
    description: "High-quality noise-canceling wireless headphones.",
    price: "$199"
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/images/smartwatch.jpg",
    description: "Track your fitness and stay connected on the go.",
    price: "$149"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "/images/speaker.jpg",
    description: "Portable speaker with powerful bass and long battery life.",
    price: "$89"
  }
];

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Product Gallery</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4">
            <div
              className="card h-100 shadow-sm cursor-pointer"
              onClick={() => handleCardClick(product)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{product.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="img-fluid mb-3 rounded"
              />
              <p>{selectedProduct.description}</p>
              <h5 className="text-primary">{selectedProduct.price}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
