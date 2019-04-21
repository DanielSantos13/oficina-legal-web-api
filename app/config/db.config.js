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


db.usuario.hasOne(db.cliente)
db.cliente.belongsTo(db.usuario)
 
 
module.exports = db;