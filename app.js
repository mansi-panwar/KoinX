const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
const cryptoRoutes = require('./routes/t1_cryptoRoutes');
const priceRoutes = require('./routes/t2_priceRoutes');
const companyRoutes = require('./routes/t3_companyRoutes');
const logger = require('./config/logger');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const config = require('./config/config');
const fetchAndStoreCryptoData = require('./utils/fetchAndStoreCryptoData');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/crypto', cryptoRoutes);
app.use('/price', priceRoutes);
app.use('/company', companyRoutes);

// Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Connect to MongoDB
mongoose
  .connect(config.DB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
    // Update the database when server is deployed or restarted
    fetchAndStoreCryptoData();
    // Schedule background job to update cryptocurrency data every 1 hour
    schedule.scheduleJob('0 * * * *', () => {
      fetchAndStoreCryptoData();
    });
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`);
    });
  })
  .catch((err) => {
    logger.error('MongoDB connection error:', err.message);
    logger.error('MongoDB connection error:', err);
  });
