const logger = require('../config/logger');
const axios = require('axios');
const Crypto = require('../models/cryptoModel');
const apiKey = require('../config/config').API_KEY;
// Function to fetch and store cryptocurrency data
async function fetchAndStoreCryptoData() {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/list',
      {
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': apiKey,
        },
      }
    );
    const cryptoData = response.data.map(({ id, name }) => ({ id, name }));
    await Crypto.deleteMany({}); // Clear existing data
    await Crypto.insertMany(cryptoData); // Insert new data
    logger.info('Cryptocurrency data updated successfully');
  } catch (error) {
    logger.error('Error updating cryptocurrency data:', error.message);
  }
}

module.exports = fetchAndStoreCryptoData;
