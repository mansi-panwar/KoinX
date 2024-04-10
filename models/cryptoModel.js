const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;
