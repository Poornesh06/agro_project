import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import FooterLogo from "./img/logo.png"

function Footer() {
  return (
    
     <footer className="footer">
     <div className="footer-container">
       {/* Left Section */}
       <div className="footer-left">
         <img src={FooterLogo} alt="Agro Logo" className="footer-logo" />
         <p className="footer-description">
           Agro quality farming products, eco-friendly pesticides, and organic
           seeds for better crops and sustainable growth.
         </p>
         <div className="footer-social">
           <i className="fab fa-twitter"></i>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-pinterest"></i>
         </div>
       </div>

       {/* Middle Section */}
       <div className="footer-middle">
         <h3>Explore</h3>
         <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/community">Community</Link></li>
        
      </ul>
       </div>

       {/* Right Section */}
       <div className="footer-right">
         <h3>Contact</h3>
         <p>
           <i className="fas fa-phone-alt"></i> +91 63816 20842
         </p>
         <p>
           <i className="fas fa-envelope"></i> agro@company.com
         </p>
         <p>
           <i className="fas fa-map-marker-alt"></i> RO 853, E.V.R Periyar High
           Road, Arumbakkam, Chennai, Tamil Nadu 600106
         </p>
         <div className="footer-newsletter">
           <input  className="l3" type="email" placeholder="Your Email Address" />
           <button className='l4'>
             <i className="fas fa-paper-plane"></i>
           </button>
         </div>
       </div>
     </div>
   </footer>
  );
}

export default Footer;
