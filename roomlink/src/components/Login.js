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
      <form onSubmit={handleSubmit}>
            <fieldset>
                <legend><h1>Log in</h1></legend>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                name="username" 
                id="username" 
                value={username}
                required={true} 
                onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="pwd">Password:</label>
                <input 
                type="password" 
                name="pwd" 
                id="pwd" 
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button className="btn btn-primary" type="submit">Log in</button>
            </fieldset>
        </form>
    </div>
    );
};

export default Login;
