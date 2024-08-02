import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://demo.microstrategy.com/MicroStrategyLibrary/api/auth/login', {
        username: 'administrator',
        password: 'string'
      });
      console.log("responsee", response);
      localStorage.setItem('authToken', response.headers["x-mstr-authtoken"]);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
