import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from './img/logo.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="top-bar">
        <p className="contact-info">+91 6381620842 | ✉ info@agro.com</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png"
              alt="Twitter"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-icon.png"
              alt="Facebook"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      <nav className="nav-bar">
        <div className="logo">
          <img src={HeaderLogo} alt="Agro Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Products</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/smart">Recommendation</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="cart-button" 
          onClick={() => navigate('/cart')}
          aria-label="Cart">
            <img
              src="https://cdn-icons-png.flaticon.com/128/18594/18594866.png"
              alt="Cart Icon"
            />
          </button>
          <button
            className="user-icon"
            onClick={() => navigate('/Login')}
            aria-label="User Account"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/15315/15315520.png"
              alt="User Icon"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
