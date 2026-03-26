const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');
const { validarEstacionar } = require('../middlewares/validators');

router.get('/', vagaController.buscarTodas);
router.get('/:id', vagaController.buscarPorId);
router.post('/:id', validarEstacionar, vagaController.estacionar);
router.delete('/:id', vagaController.liberar);

module.exports = router;