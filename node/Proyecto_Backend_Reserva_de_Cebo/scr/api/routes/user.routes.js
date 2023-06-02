const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const {
  register,
  checkNewUser,
  resendCode,
} = require('../controllers/users.controller');
const UserRoutes = express.Router();

UserRoutes.post('/register', upload.single('imagen'), register);
UserRoutes.post('/check', checkNewUser);
UserRoutes.post('/resend', resendCode);

module.exports = UserRoutes;
