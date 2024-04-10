const Crypto = require('../models/cryptoModel');
const logger = require('../config/logger');

exports.getAllCryptos = async (req, res, next) => {
  try {
    const cryptos = await Crypto.find({}, { _id: 0, __v: 0 });
    res.json(cryptos);
    logger.info('Data fetched successfully from database');
  } catch (error) {
    logger.error('Error occurred:', error);
    next(error);
  }
};
