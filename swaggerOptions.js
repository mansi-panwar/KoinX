const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'KoinX API',
      version: '1.0.0',
      description: 'API for managing cryptocurrencies',
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerOptions;
