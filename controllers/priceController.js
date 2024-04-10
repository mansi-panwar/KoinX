const axios = require('axios');
const apiKey = require('../config/config').API_KEY;
const logger = require('../config/logger');

exports.getPriceOnDate = async (req, res, next) => {
  const { fromCurrency, toCurrency, date } = req.body;
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}`,
      {
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': apiKey,
        },
      }
    );
    const priceData = response.data.market_data.current_price;
    const price = priceData[toCurrency.toLowerCase()];
    res.json({ price });
    logger.info(
      `Extracted Price of ${fromCurrency} on ${date} = ${price} ${toCurrency}`
    );
  } catch (error) {
    logger.error('Error occurred:', error);
    next(error);
  }
};
