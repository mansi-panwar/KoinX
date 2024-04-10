require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  API_KEY: process.env.API_KEY,
};
