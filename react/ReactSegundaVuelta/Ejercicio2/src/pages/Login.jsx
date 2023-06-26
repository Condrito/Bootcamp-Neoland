import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import useLoginError from '../hooks/useLoginError';
import { loginUser } from '../services/user.service';
import { userlogin } from '../utils/loginLocalStorage';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [loginOk, setLoginOk] = useState(false);

  //! ---------- FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-----------------------
  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  //! ---------USEffect ASOCIADO A LA RES PARA GESTIONAR LOS ERRORES----------------
  useEffect(() => {
    useLoginError(res, setLoginOk, userlogin);
  }, [res]);

  //! ---------- LOS CONDICIONALES QUE GESTIONAN LOS ESTADOS DE NAVEGACION--------------

  if (loginOk) {
    if (res.data.user.check == false) {
      return <Navigate to="/checkcode" />;
    } else {
      return <Navigate to="/home" />;
    }
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Conectate</h1>
        <p>Nos alegramos de volver a verte</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register('email', { required: true })}
            />

            <div className="password_container form-group">
              <label htmlFor="custom-input" className="custom-placeholder">
                contraseña
              </label>
              <input
                className="input_user"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register('password', { required: true })}
              />
            </div>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? '#007DBC;' : '#7ebbda;' }}
            >
              Conectar
            </button>
          </div>
        </form>

        <p className="parrafoLogin">
          ¿Aún no estás registrado? <Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
