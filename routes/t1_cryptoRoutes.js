const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');
/**
 * @swagger
 * tags:
 *   name: Task-1 Cryptocurrencies
 *   description: API endpoints for fetch name and id of all cryptocurrencies.
 * /crypto:
 *   get:
 *     description: Get all cryptocurrencies
 *     tags: [Task-1 Cryptocurrencies]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.get('/', cryptoController.getAllCryptos);

module.exports = router;
