
const { body, validationResult } = require('express-validator');

function validar(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

const validarRegister = [
  body('email')
    .isEmail()
    .withMessage('Email inválido'),
  body('senha')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter no mínimo 6 caracteres'),
  validar
];

const validarLogin = [
  body('email')
    .notEmpty()
    .withMessage('Email é obrigatório'),
  body('senha')
    .notEmpty()
    .withMessage('Senha é obrigatória'),
  validar
];

const validarEstacionar = [
  body('placa')
    .notEmpty()
    .withMessage('Placa é obrigatória')
    .isLength({ min: 7, max: 8 })
    .withMessage('Placa inválida'),
  body('modelo')
    .notEmpty()
    .withMessage('Modelo é obrigatório'),
  validar
];

module.exports = { validarRegister, validarLogin, validarEstacionar };