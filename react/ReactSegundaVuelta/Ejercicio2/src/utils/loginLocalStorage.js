import { Navigate } from 'react-router-dom';

//! ------------- FUNCION QUE GESTIONA EL LOGIN DEL USER -----------------------------
export const userlogin = (data) => {
  // recibimos la data en formato string, es un objeto
  localStorage.setItem('user', data);
  // parseamos la data que la recibimos en string y la metemos al estado
};

//! ----------------FUNCION QUE GESTIONA EL LOGOUT ----------------------------------------
export const logout = () => {
  localStorage.removeItem('user');

  Navigate('/');
};
