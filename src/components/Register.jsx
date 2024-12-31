import React, { useState } from 'react';
import './Register.css';
import ved from './vedio/bgved.mp4';
import logo from './img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must contain at least 8 characters');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:1234/Reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${firstName} ${lastName}`,
          email,
          password,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed.');
      }

      const data = await response.json();
      setSuccess(data.message);
      console.log('Registration successful:', data);
      navigate('/Login');
    } catch (err) {
      setError(err.message);
    }
  };

  // Add an onClick handler for the "Clear" button
  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
    console.log('Form cleared');
  };

  return (
    <div className="center-wrapper">
      <video src={ved} autoPlay loop muted />
      <div className="auth-container">
        <img src={logo} alt="Agro Logo" className="logo" />
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Must contain 8 characters"
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <p>
            By continuing, you agree to our <Link to="/terms">Terms of Service</Link> and{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
          <button type="submit" className="btn btn-green" onClick={handleSubmit}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
