import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState(''); // State for success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios POST request to send the data to /register
      const response = await axios.post('http://localhost:3008/api/register', {
        email: formData.email,
        password: formData.password,
      });

      // Handle the response here (e.g., show success message)
      setResponseMessage(response.data.message);
    } catch (error) {
      // Handle error here (e.g., show error message)
      setResponseMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
      
      {/* Display success or error message */}
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

export default Signup;
