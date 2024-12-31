import React from 'react';
import "./HomePage.css";
import ved from './vedio/bgved.mp4';

function HomePage() {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop className="homepage-video">
        <source src={ved} type="video/mp4" />
      </video>
      <div className="section">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmJywKus5MPgXSNew3iE5lySq0uQrDSfOGgZ8iHvNEHXDugUr2" alt="Organic Seeds" className="section-image" />
        <h2>Organic Seeds for Abundant Harvests</h2>
        <p>
          Grow sustainably with non-GMO, eco-friendly seeds that are resilient
          to pests and designed for bountiful harvests and soil health.
        </p>
        <button className="order-button">Order now</button>
      </div>

      <div className="section">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfa6ihflXmtYQ4f5yXbm64SR91FrfQumXR9_XhncUCibo6QclZ" alt="Eco-Friendly Pesticides" className="section-image" />
        <h2>Eco-Friendly Pesticides for Better Yields</h2>
        <p>
          Organic pesticides protect crops, boost yields, and preserve soil
          health, supporting sustainable farming and healthier ecosystems.
        </p>
        <button className="order-button">Order more</button>
      </div>

      <div className="section3">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYvaDcw3ScTOyvp2hgqzjYxBqn9XKo7qi1F-RKCkv9brjQ_4HP" alt="Innovative Tools" className="section-image" />
        <h2>Innovative Tools and Products</h2>
        <p>
          Modern farming tools enhance productivity, reduce labor, and improve
          crop management. These advancements enable healthier crops and
          sustainable practices for long-term success.
        </p>
        <button className="order-button">Order now</button>
      </div>
    </div>
  );
}

export default HomePage;