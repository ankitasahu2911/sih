import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '', 
  });
  const [selectedFile, setSelectedFile] = useState(null); // State to track uploaded file

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

    // Simulating a successful login
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration Data:', formData);

    // Simulate successful registration and login
    setIsLoggedIn(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add actual upload logic here
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
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
      ) : (
        <div className="upload-container">
         <h2>Upload Image</h2>
         <form className="upload-form">
         <input 
    type="file" 
    id="fileInput" 
    onChange={handleFileChange} 
  />
  <label htmlFor="fileInput">Select File</label>
  <button type="button" onClick={handleFileUpload}>Upload</button>
  {selectedFile && <p>Selected file: {selectedFile.name}</p>}
</form>
        </div>
      )}
    </div>
  );
};

export default Login;
