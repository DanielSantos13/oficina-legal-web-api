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
	Usuario.update({ login: req.body.login, senha: req.body.senha, email: req.body.email, ativo: req.body.ativo, },
		{ where: { idUsuario: req.params.idUsuario } }
	).then(() => { res.send("Atualizado com Sucesso " + idUsuario) });
};

exports.auth = (req, res) => {
	let password = req.body.senha;
	let email = req.body.email;
	const crypto = require('crypto')
	const alg = 'aes-256-ctr'
	const cipher = crypto.createCipher(alg, pwd)
  	const crypted = cipher.update(password, 'utf8', 'hex')
	
	  Usuario.findAll({ where: { email: email } })
		.then(retorno => {
			if (retorno.senha === crypted) {
				res.status(200).send("login bem sucedido");
			}
			else {
				res.status(200).send("Login ou senha incorretos!")
			}
			;

		}).catch(err => res.send("Houve um erro inesperado"));
};