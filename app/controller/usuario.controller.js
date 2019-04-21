const db = require('../config/db.config.js');
const Usuario = db.usuario;
const Gestor = db.gestor;


// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Usuario.create({  
	 	login: req.body.login,
	  	senha: req.body.senha,
		email: req.body.email,
		ativo: req.body.ativo,
	}).then(usuario => {		
		
		res.status(201)
		res.send(usuario);
	});
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Usuario.findAll({

	}).then(usuario => {
		res.status(200)
	  res.send(usuario);
	});
};

 
// Update a Customer
exports.update = (req, res) => {
	const idUsuario = req.params.idUsuario;
	Usuario.update( { login: req.body.login, senha: req.body.senha, email: req.body.email, ativo: req.body.ativo, }, 
					 { where: {idUsuario: req.params.idUsuario} }
				   ).then(() => {res.send("Atualizado com Sucesso " + idUsuario)});
};
 
