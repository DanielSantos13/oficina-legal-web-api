const env = require('./.env');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.usuario = require('../model/usuario.model')(sequelize, Sequelize);
db.cliente = require('../model/cliente.model.js')(sequelize, Sequelize);
db.oficina = require('../model/Oficina.model.js')(sequelize, Sequelize);
db.gestor = require('../model/Gestor.model.js')(sequelize, Sequelize);


db.usuario.hasOne(db.cliente,{foreignKey: 'idUsuario'})
db.cliente.belongsTo(db.usuario,{foreignKey: 'idUsuario'})

db.usuario.hasOne(db.gestor,{foreignKey: 'idUsuario'})
db.gestor.belongsTo(db.usuario,{foreignKey: 'idUsuario'})

db.oficina.hasOne(db.gestor,{foreignKey: 'idOficina'})
db.gestor.belongsTo(db.oficina,{foreignKey: 'idOficina'}) 
 
module.exports = db;
