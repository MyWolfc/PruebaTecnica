const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api de entrevistas',
      version: '1.0.0',
      description: 'Esta es la API de la prueba tecnica',
    },
  },
  apis: ['./rutas/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;