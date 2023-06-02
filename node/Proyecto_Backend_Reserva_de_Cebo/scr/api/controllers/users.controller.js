const User = require('../models/user.model');
//const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handle-error');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');
dotenv.config();

//--------------------------------------------------------------------------------
//····································REGISTER····································
//--------------------------------------------------------------------------------

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    await User.syncIndexes();
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    const confirmationCode = Math.floor(
      Math.random() * (999999 - 100000) + 100000
    );

    const newUser = new User({ ...req.body, confirmationCode });

    if (req.file) {
      newUser.imagen = req.file.path;
    } else {
      newUser.imagen =
        'https://w1.pngwing.com/pngs/332/149/png-transparent-circle-silhouette-logo-user-generic-programming-black-black-and-white-line-sky.png';
    }

    const userExist = await User.findOne({
      email: newUser.email,
      name: newUser.name,
    });

    if (userExist) {
      if (req.file) deleteImgCloudinary(catchImg);
      return next(setError(409, 'This user already exist'));
    } else {
      const createUser = await newUser.save();
      createUser.password = null;

      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Code confirmation',
        text: `Your code is ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent:' + info.response);
        }
      });

      return res.status(201).json({
        user: createUser,
        confirmationCode: confirmationCode,
      });
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    setError(error.code || 500, error.message || 'failed create user');
  }
};

//--------------------------------------------------------------------------------
//·······························CHECK NEW USER···································
//--------------------------------------------------------------------------------

const checkNewUser = async (req, res, next) => {
  try {
    const { email, confirmationCode } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json('User not found');
    } else {
      if (confirmationCode === userExist.confirmationCode) {
        try {
          await userExist.updateOne({ check: true });
          const updateUser = await User.findOne({ email });

          return res.status(200).json({
            testCheckOk: updateUser.check == true ? true : false,
          });
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else {
        await User.findByIdAndDelete(userExist._id);
        deleteImgCloudinary(userExist.imagen);
        return res.status(200).json({
          userExist,
          check: false,
          delete: (await User.findById(userExist._id))
            ? 'error delete user'
            : 'Ok delete user',
        });
      }
    }
  } catch (error) {
    return next(setError(500, 'General error check code'));
  }
};

module.exports = {
  register,
  checkNewUser,
};
