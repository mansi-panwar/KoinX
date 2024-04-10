const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');
/**
 * @swagger
 * tags:
 *   name: Task-2 Price
 *   description: API endpoints to get price of specific cryptocurrencies.
 * /price/getPriceOnDate:
 *   post:
 *     description: Get price of one cryptocurrency in terms of another on a particular date
 *     tags: [Task-2 Price]
 *     parameters:
 *       - name: requestBody
 *         description: |
 *          Provide the following parameters in the request body.
 *          - sourceCurrency: Name of the source cryptocurrency
 *          - targetCurrency: Name of the target cryptocurrency
 *          - date: Date in format 'DD-MM-YYYY'
 *         in: body
 *         required: true
 *         type: application/json
 *         default: { "fromCurrency": "bitcoin", "toCurrency": "INR", "date": "10-04-2024" }
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.post('/getPriceOnDate', priceController.getPriceOnDate);

module.exports = router;
