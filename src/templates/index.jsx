import React, { useState } from 'react';
// import './App.css';

const App = () => {
  const [cartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Classic Linen Shirt",
      price: 145,
      description: "100% European flax linen",
      image: "https://images.pexels.com/photos/5270533/pexels-photo-5270533.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 2,
      name: "Black Linen Shirt",
      price: 155,
      description: "Stonewashed for softness",
      image: "https://images.pexels.com/photos/22441297/pexels-photo-22441297/free-photo-of-shirt-on-hanger-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 3,
      name: "Overshirt",
      price: 195,
      description: "Heavyweight linen blend",
      image: "https://images.pexels.com/photos/5156489/pexels-photo-5156489.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 4,
      name: "White Linen Shirt",
      price: 145,
      description: "Crisp unfinished collar",
      image: "https://images.pexels.com/photos/31854718/pexels-photo-31854718/free-photo-of-folded-yellow-and-brown-linen-shirts-with-tags.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 5,
      name: "Travel Shirt",
      price: 165,
      description: "Reinforced stress points",
      image: "https://images.pexels.com/photos/22441291/pexels-photo-22441291/free-photo-of-shirt-on-hanger-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 6,
      name: "Red Stitch Special",
      price: 175,
      description: "Signature edition",
      image: "https://images.pexels.com/photos/17805751/pexels-photo-17805751/free-photo-of-man-sitting-backwards-with-straw-sunhat.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        id: 7,
        name: "Classic Linen Shirt",
        price: 145,
        description: "100% European flax linen",
        image: "https://images.pexels.com/photos/5270533/pexels-photo-5270533.jpeg?auto=compress&cs=tinysrgb&w=1200"
      },
      {
        id: 8,
        name: "Black Linen Shirt",
        price: 155,
        description: "Stonewashed for softness",
        image: "https://images.pexels.com/photos/22441297/pexels-photo-22441297/free-photo-of-shirt-on-hanger-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1200"
      },
      {
        id: 9,
        name: "Overshirt",
        price: 195,
        description: "Heavyweight linen blend",
        image: "https://images.pexels.com/photos/5156489/pexels-photo-5156489.jpeg?auto=compress&cs=tinysrgb&w=1200"
      },
      {
        id: 10,
        name: "White Linen Shirt",
        price: 145,
        description: "Crisp unfinished collar",
        image: "https://images.pexels.com/photos/31854718/pexels-photo-31854718/free-photo-of-folded-yellow-and-brown-linen-shirts-with-tags.jpeg?auto=compress&cs=tinysrgb&w=1200"
      },
      {
        id: 11,
        name: "Travel Shirt",
        price: 165,
        description: "Reinforced stress points",
        image: "https://images.pexels.com/photos/22441291/pexels-photo-22441291/free-photo-of-shirt-on-hanger-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1200"
      },
      {
        id: 12,
        name: "Red Stitch Special",
        price: 175,
        description: "Signature edition",
        image: "https://images.pexels.com/photos/17805751/pexels-photo-17805751/free-photo-of-man-sitting-backwards-with-straw-sunhat.jpeg?auto=compress&cs=tinysrgb&w=1200"
      }
  ];

  return (
    <div className="av-app">
      {/* Navbar */}
      <nav className="av-nav">
        <div className="av-logo">ASHVULPES</div>
        <div className="av-nav-links">
          <a href="#">SHOP</a>
          <a href="#">ABOUT</a>
          <a href="#">CART ({cartCount})</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="av-hero">
        <div className="av-hero-content">
          <h1>Premium Linen Shirts</h1>
          <p>Designed to age beautifully</p>
        </div>
      </div>

      {/* Products */}
      <div className="av-products">
        <h2 className="av-section-title">Our Collection</h2>
        <div className="av-product-grid">
          {products.map(product => (
            <div key={product.id} className="av-product-card">
              <div
                className="av-product-image">
                    <img src={product.image} alt={product.name} />        
              </div>
              <div className="av-product-info">
                <h3>{product.name}</h3>
                <p className="av-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="av-footer">
        <div className="av-footer-content">
          <div className="av-footer-logo">ASHVULPES</div>
          <div className="av-footer-links">
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="av-copyright">
          © 2025 ASHVULPES. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
