import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '', 
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Login Data:', formData);
    
  };

  const handleRegister = (e) => {
    e.preventDefault();
   
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration Data:', formData);
   
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={isLogin ? handleLogin : handleRegister}>
        <h2>{isLogin ? 'Login' : 'Sign Up / Register'}</h2>

        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Enter your user ID"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          aria-required="true"
          placeholder="Enter your password"
        />

        {!isLogin && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="Confirm your password"
            />
          </>
        )}

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

        <button
          type="button"
          className="toggle-btn"
          onClick={toggleForm}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
