import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/LoginPage.css';
import axios from 'axios';

const LoginPage = () => {
  const location = useLocation();
  const selectedRole = location.state?.role || 'Student';
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Sign Up logic
      alert(`Signing up as ${selectedRole}:\nName: ${name}\nEmail: ${email}`);
      // You can replace this with a real POST request like:
      // await axios.post('/api/signup', { name, email, password, role: selectedRole });
    } else {
      try {
        const res = await axios.post('http://localhost:5000/api/login', {
          email,
          password,
          role: selectedRole,
        });

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', selectedRole);

        if (selectedRole === 'Student') navigate('/student/dashboard');
        else if (selectedRole === 'Teacher') navigate('/teacher/dashboard');
        else navigate('/admin/dashboard');
      } catch (err) {
        alert('Login failed');
      }
    }
  };

  const handleGoogleSignup = () => {
    alert(`Signing in with Google as ${selectedRole}`);
    // Front-end only. Integrate Firebase/Auth0/Google Auth SDK here.
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Forge IT LMS - {selectedRole}</h2>

        <div className="tab-buttons">
          <button
            className={!isSignUp ? 'active' : ''}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={isSignUp ? 'active' : ''}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleAuth}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>

        <div className="google-section">
          <p>Or {isSignUp ? 'sign up' : 'sign in'} with</p>
          <button className="google-btn" onClick={handleGoogleSignup}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
