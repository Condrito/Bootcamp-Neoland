import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../../components/AuthForm';
import { UserContext } from '../../components/Context/UserContest';

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const { login, user } = useContext(UserContext);

  const navigate = useNavigate();

  const onFormSubmit = (values) => {
    login(values.user);
  };

  useEffect(() => {
    user && navigate('/Destino');
  }, [user]);
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>
          <span>Inicia sesión:</span>
          <input {...register('user')} placeholder="Nombre de usuario" type="text" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
