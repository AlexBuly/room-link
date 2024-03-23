import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password });
      navigate('/feed')
      handleLogin(response.data.token, response.data.username);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login'>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
