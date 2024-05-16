const { DataTypes,Model } = require('sequelize');
const DB = require('../BD/bd');
const Vacantes = require('./modeloVacante')
const Prospecto = require('./modeloProspecto')

class Entrevistas extends Model { }

Entrevistas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey : true,
      autoIncrement: true,
      autoIncrementIdentity: true
    },
    fecha_entrevista:{
      type: DataTypes.DATE,
      allowNull: true
    },
    notas:{
      type: DataTypes.TEXT,
      allowNull : true
    },
    reclutado:{
      type:DataTypes.TINYINT,
      allowNull : true
    }
  },
  {
    sequelize : DB,
    modelName : 'Entrevista',
    tableName : 'ENTREVISTA',
    timestamps: false
  }
)

Entrevistas.belongsTo(Vacantes,{foreignKey: 'vacante', onDelete: 'CASCADE'})
Entrevistas.belongsTo(Prospecto,{foreignKey:'prospecto',onDelete:'CASCADE'})

Prospecto.hasMany(Entrevistas,{foreignKey:'vacante'})
Vacantes.hasMany(Entrevistas,{foreignKey:'prospecto'})

async function syncModels() {
  try {
    await DB.sync();
    console.log('Modelos sincronizados correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
}

syncModels();


module.exports = Entrevistas;