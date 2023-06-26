import './Register.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import Uploadfile from '../components/Uploadfile';
import useUserError from '../hooks/useUserError';
import { registerUser } from '../services/user.service';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [registerOk, setRegisterOk] = useState(false);

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;

    if (inputFile.length !== 0) {
      // cuando me han hayan puesto una imagen por el input

      const custonFormData = {
        ...formData,
        imagen: inputFile[0],
      };

      setSend(true);
      setRes(await registerUser(custonFormData));

      setSend(false);

      //! me llamo al servicio
    } else {
      const custonFormData = {
        ...formData,
      };

      setSend(true);
      setRes(await registerUser(custonFormData));

      setSend(false);

      ///! me llamo al servicio
    }
  };

  useEffect(() => {
    useUserError(res, setRegisterOk);
  }, [res]);
  console.log('el login esta ok', registerOk);
  if (registerOk) {
    return <Navigate to="/checkcode" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Registrate</h1>
        <p>Es gratis y solo tardas un minuto</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              nombre de usuario
            </label>
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register('name', { required: true })}
            />
          </div>
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
          </div>
          <div className="telf_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              teléfono
            </label>
            <input
              className="input_user"
              type="telf"
              id="telf"
              name="telf"
              autoComplete="false"
              {...register('telf', { required: true })}
            />
          </div>

          <Uploadfile />

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? '#007DBC;' : '#7ebbda;' }}
            >
              Registrarse
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Al hacer clic en el botón de Registrarse, aceptas nuestros{' '}
              <a href="#">términos y condiciones</a> y{' '}
              <a href="#">política de privacidad</a>
            </small>
          </p>
        </form>

        <p>
          ¿Ya tienes una cuenta? <Link to="/">Conectate aquí</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
