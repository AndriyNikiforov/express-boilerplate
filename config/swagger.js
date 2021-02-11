const swaggerJSDOC = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'REST API for my App',
    version: '0.0.1',
    description: 'This is the REST API',
  },
};

const options = {
  swaggerDefinition,
  apis: ['./docs/**/**/*.yaml'],
};

module.exports = swaggerJSDOC(options);
