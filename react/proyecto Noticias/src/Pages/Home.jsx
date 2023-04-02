import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../components/Context/UserContest';

const Home = () => {
  const { login, user } = useContext(UserContext);
  const textInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/Noticias');
  }, [user]);
  return (
    <div className="home">
      <h1>NOTICIAS</h1>
      <h4>Inicia sesión</h4>
      <label>
        <input type="text" ref={textInput} />
      </label>

      <Button variant="contained" onClick={() => login(textInput.current.value)}>
        Login
        <LoginIcon />
      </Button>
    </div>
  );
};

export default Home;
