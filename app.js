
var express = require('express');
var router = express.Router();
const cors = require('cors');
usuario = require('./app/route/usuario.route.js')(router);
cliente = require('./app/route/cliente.route.js')(router);


var app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log('Drop and Resync with { force: true }');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}))
app.use('/',usuario);
app.use('/api',usuario);
app.use('/api/usuario',usuario);
app.use('/',cliente);
app.use('/api',cliente);
app.use('/api/cliente',cliente);


module.exports = app