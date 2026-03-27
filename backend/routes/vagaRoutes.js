const express = require('express');
const router = express.Router();
const vagaController = require('../controllers/vagaController');
const { validarEstacionar } = require('../middlewares/validators');

/**
 * @swagger
 * /vagas:
 *   get:
 *     summary: List all parking spots (paginated)
 *     tags: [Vagas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Paginated list of parking spots
 *       401:
 *         description: Token not provided
 */
router.get('/', vagaController.buscarTodas);

/**
 * @swagger
 * /vagas/{id}:
 *   get:
 *     summary: Get a specific parking spot
 *     tags: [Vagas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Parking spot details
 *       404:
 *         description: Spot not found
 */
router.get('/:id', vagaController.buscarPorId);

/**
 * @swagger
 * /vagas/{id}:
 *   post:
 *     summary: Park a vehicle in a spot
 *     tags: [Vagas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - placa
 *               - modelo
 *             properties:
 *               placa:
 *                 type: string
 *                 example: ABC-1234
 *               modelo:
 *                 type: string
 *                 example: Toyota Corolla
 *     responses:
 *       200:
 *         description: Vehicle parked successfully
 *       400:
 *         description: Spot already occupied or validation error
 */
router.post('/:id', validarEstacionar, vagaController.estacionar);

/**
 * @swagger
 * /vagas/{id}:
 *   delete:
 *     summary: Release a parking spot
 *     tags: [Vagas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Spot released successfully
 *       400:
 *         description: Spot already empty
 */
router.delete('/:id', vagaController.liberar);

module.exports = router;