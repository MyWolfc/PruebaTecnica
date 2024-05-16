const { Sequelize } = require('sequelize');
const configenv = require('dotenv')

configenv.config()
const baseDatos = new Sequelize(process.env.BD, process.env.user, process.env.pass, {
  dialect: 'mssql',
  host: process.env.host, 
  port: process.env.port, 
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