const { Sequelize } = require('sequelize');

const baseDatos = new Sequelize('entrevista', 'sa', 'Juan2000', {
  dialect: 'mssql',
  host: 'localhost', 
  port: 49173, 
  omitNull:false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
  dialectOptions: {
    options: {
      encrypt: true 
    }
  }
});

module.exports = baseDatos;