import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div>Home</div>
      <button onClick={navigateToLogin}>Go to Login</button>
    </>
  );
};
