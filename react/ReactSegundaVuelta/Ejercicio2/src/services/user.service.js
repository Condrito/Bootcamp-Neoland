import { APIuser } from './serviceApiUser.config';

//! -------------------------REGISTER ---------------------------------------
export const registerUser = async (formData) => {
  console.log();
  return APIuser.post('/users/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((res) => res)
    .catch((error) => error);
};

//! -------------------------LOGIN ---------------------------------------
export const loginUser = async (formData) => {
  return APIuser.post('/users/login', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//! -----------------------CHECK CODE -----------------------------------

export const checkCodeConfirmationUser = async (formData) => {
  return APIuser.post('/users/check', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! ----------------------- RESED CODE CONFIRMATION ------------------------------

export const resendCodeConfirmationUser = async (formData) => {
  return APIuser.post('/users/resend', formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
