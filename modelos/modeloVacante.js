const { DataTypes, Model } = require('sequelize');
const DB = require('../BD/bd');




class Vacantes extends Model{}

Vacantes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      autoIncrementIdentity: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sueldo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    activo: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    sequelize: DB,
    modelName: 'Vacante',
    tableName: 'VACANTE',
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

module.exports = Vacantes;
