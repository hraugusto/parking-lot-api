const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validarRegister, validarLogin } = require('../middlewares/validators');

router.post('/register', validarRegister, authController.register);
router.post('/login', validarLogin, authController.login);

module.exports = router;