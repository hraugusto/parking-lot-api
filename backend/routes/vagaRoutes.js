const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');

router.get('/', vagaController.buscarTodas);
router.get('/:id', vagaController.buscarPorId);
router.post('/:id', vagaController.estacionar);
router.delete('/:id', vagaController.liberar);

module.exports = router;