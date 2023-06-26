import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import useCheckCodeError from '../hooks/useCheckCodeError';
import useResendCodeError from '../hooks/useResendCodeError';
import {
  checkCodeConfirmationUser,
  resendCodeConfirmationUser,
} from '../services/user.service';

const CheckCode = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [resResend, setResResend] = useState({});
  const [send, setSend] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [okCheck, setOkCheck] = useState(false);

  const getDataLocalStorage = JSON.parse(localStorage.getItem('data'));

  //! -------FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-------
  const formSubmit = async (formData) => {
    const userLocal = localStorage.getItem('user');

    if (userLocal == null) {
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: getDataLocalStorage.data.user.email,
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(custFormData));
      setSend(false);
    } else {
      const parseUser = JSON.parse(userLocal);
      const custFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: parseUser.email,
      };
      setSend(true);
      setRes(await checkCodeConfirmationUser(custFormData));
      setSend(false);
    }
  };

  const handleReSend = async () => {
    const userLocal = localStorage.getItem('user');
    if (userLocal == null) {
      const formDataCustom = { email: getDataLocalStorage.data?.user?.email };
      setSend(true);
      setResResend(await resendCodeConfirmationUser(formDataCustom));
      setSend(false);
    } else {
      // cuando no sea nulll quiere decir que la llamada la estoy haciendo despues de logarme
      const parseUser = JSON.parse(userLocal);
      const formDataCustom = { email: parseUser.email };
      setSend(true);
      setResResend(await resendCodeConfirmationUser(formDataCustom));
      setSend(false);
    }
  };

  //! --------USE EFFECT QUE NOSC SIRVE CUANDO CAMBIA RES A LANZAR EL COMPROBADOR DE ERRORES
  useEffect(() => {
    useCheckCodeError(res, setDeleteUser, setOkCheck);
  }, [res]);

  useEffect(() => {
    useResendCodeError(resResend);
  }, [resResend]);

  //! -------- PONEMOS LOS CONDICIONALES QUE EVALUAN SI ESTAN A TRUE LOS ESTADOS DE NAVEGACION (deleUser, okCheck)

  if (deleteUser) {
    return <Navigate to="/register" />;
  }
  if (okCheck) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Verifica tu código</h1>
        <p>Escribe el código te hemos enviado a tu email</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              código de registro
            </label>
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register('confirmationCode', { required: false })}
            />
          </div>

          <div className="btn_container">
            <button
              id="btnCheck"
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? '#007DBC;' : '#7ebbda;' }}
            >
              Verificar código
            </button>
          </div>
          <div className="btn_container">
            <button
              id="btnResend"
              className="btn"
              disabled={send}
              style={{ background: send ? '#007DBC;' : '#7ebbda;' }}
              onClick={() => handleReSend()}
            >
              Reenviar código
            </button>
          </div>

          <p className="bottom-text">
            <small>
              Si el código no es correcto, tu usuario será eliminado de la base de datos y
              deberás registrarte nuevamente.
            </small>
          </p>
        </form>
      </div>
    </>
  );
};

export default CheckCode;
