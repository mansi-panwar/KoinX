const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
/**
 * @swagger
 * tags:
 *   name: Task-3 Companies
 *   description: API endpoints for fetching companies related to specific cryptocurrencies.
 * /company/getCompanies:
 *   post:
 *     description: Get companies holding a particular cryptocurrency
 *     tags: [Task-3 Companies]
 *     parameters:
 *       - name: requestBody
 *         description: Name of the cryptocurrency
 *         in: body
 *         required: true
 *         type: json
 *         default: { "currency": "bitcoin" }
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.post('/getCompanies', companyController.getCompanies);

module.exports = router;
