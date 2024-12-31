import React from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ServicesPage from '../components/ServicesPage';
import CommunityPage from '../components/CommunityPage';
import CartPage from '../components/CartPage';
import PaymentPage from '../components/PaymentPage';
import DiscussionPage from '../components/DiscussionPage';
import Login from '../components/Login'; // Import Login component
import Register from '../components/Register'; // Import Register component
import VerifyAccount from '../components/VerifyAccount'; // Import VerifyAccount component

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/discussion" element={<DiscussionPage />} />
      
      {/* Login, Register, and VerifyAccount routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-account" element={<VerifyAccount />} />
    </Routes>
  );
}

export default AppRoutes;
