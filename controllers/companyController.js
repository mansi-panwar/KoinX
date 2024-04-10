const logger = require('../config/logger');
const axios = require('axios');
const apiKey = require('../config/config').API_KEY;
exports.getCompanies = async (req, res, next) => {
  const { currency } = req.body;
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`,
      {
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': apiKey,
        },
      }
    );
    const companies = response.data.companies.map((company) => company.name); // Accessing the companies property
    res.json({ companies });
    logger.info(`Extracted companies data for crytocurrency: ${currency}`);
  } catch (error) {
    logger.error('Error occurred:', error);
    next(error);
  }
};
