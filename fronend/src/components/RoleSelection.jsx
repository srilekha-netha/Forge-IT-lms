import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelection.css'; // Make sure this CSS file is created below

const RoleSelection = () => {
  const [role, setRole] = useState('Student');
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/login', { state: { role } });
  };

  return (
    <div className="role-container">
      <div className="role-card">
        <h1>
          Welcome to <span className="brand-name">Forge <span className="it">IT</span></span>
        </h1>
        <p className="subtitle">Choose your role to continue</p>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Admin">Admin</option>
        </select>

        <button onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default RoleSelection;

