import React from 'react';
// import './App.css';
import logo from '../assets/logoname.jpeg';
import hero from '../assets/banner.jpg';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import img9 from '../assets/9.jpeg';

import logoimg from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Index = () => {

  const products = [
    {
      id: 1,
      name: "Classic Linen Shirt",
      price: 1600.00,
      description: "100% European flax linen",
      image: img1
    },
    {
      id: 2,
      name: "Black Linen Shirt",
      price: 1600.00,
      description: "Stonewashed for softness",
      image: img2
    },
    {
      id: 3,
      name: "Overshirt",
      price: 1600.00,
      description: "Heavyweight linen blend",
      image: img3
    },
    {
      id: 4,
      name: "White Linen Shirt",
      price: 1600.00,
      description: "Crisp unfinished collar",
      image: img4
    },
    {
      id: 5,
      name: "Travel Shirt",
      price: 1600.00,
      description: "Reinforced stress points",
      image: img5
    },
    {
      id: 6,
      name: "Red Stitch Special",
      price: 1600.00,
      description: "Signature edition",
      image: img6
    },
    {
      id: 7,
      name: "Classic Linen Shirt",
      price: 1600.00,
      description: "100% European flax linen",
      image: img7
    },
    {
      id: 8,
      name: "Black Linen Shirt",
      price: 1600.00,
      description: "Stonewashed for softness",
      image: img8
    },
    {
      id: 9,
      name: "Overshirt",
      price: 1600.00,
      description: "Heavyweight linen blend",
      image: img9
    },
    {
      id: 10,
      name: "White Linen Shirt",
      price: 1600.00,
      description: "Crisp unfinished collar",
      image: img1
    },
    {
      id: 11,
      name: "Travel Shirt",
      price: 1600.00,
      description: "Reinforced stress points",
      image: img2
    },
    {
      id: 12,
      name: "Red Stitch Special",
      price: 1600.00,
      description: "Signature edition",
      image: img3
    }
  ];

  return (
    <div className="av-app">
      {/* Navbar */}
      <nav className="av-nav">
        <div className="av-logo text-center"><img src={logo} alt="ashvuples" height="30" width="170" /></div>

      </nav>

      {/* Hero Section */}
      <div className="av-hero">
        <div className="av-hero-content">
          <img src={hero} alt="ashvuples" />
          <div className="hero-overlay">
            <h1 className="hero-text text-muted">Effortlessly Selling</h1>
            <div className='fw-larger'>Discover quality products with fast shipping and secure checkout.</div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="av-products">
        <h2 className="av-section-title">NEW IN</h2>
        <div className="av-product-grid">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="av-product-card-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="av-product-card">
                <div className="av-product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="av-hover-details">
                  <div>{product.name}</div>
                </div>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="av-footer">
        <div className="av-footer-content">
          <div className="av-logo text-center"><img src={logoimg} alt="ashvuples" height="80" width="150" /></div>

        </div>
        <div className="av-copyright">
          © 2025 ASHVULPES. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
