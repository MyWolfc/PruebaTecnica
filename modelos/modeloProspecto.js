const { DataTypes, Model } = require('sequelize');
const DB = require('../BD/bd');

class Prospecto extends Model{}

Prospecto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement: true,
      autoIncrementIdentity: true,
      allowNull:false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize: DB,
    modelName : 'Prospecto',
    tableName: 'PROSPECTO',
    timestamps: false
    }
)

async function syncModels() {
  try {
    await DB.sync();

    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
}

syncModels();

module.exports = Prospecto;
