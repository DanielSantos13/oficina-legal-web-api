
var express = require('express');
var router = express.Router();
const cors = require('cors');
usuario = require('../route/usuario.route.js')(router);
cliente = require('../route/cliente.route.js')(router);
oficina = require('../route/oficina.route.js')(router);
gestor = require('../route/gestor.route.js')(router);
veiculo = require('../route/veiculo.route.js')(router);

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
app.use('/',oficina);
app.use('/api',oficina);
app.use('/api/oficina',oficina);
app.use('/',gestor);
app.use('/api',gestor);
app.use('/api/gestor',gestor);
app.use('/',veiculo);
app.use('/api',veiculo);
app.use('/api/veiculo', veiculo);


module.exports = app