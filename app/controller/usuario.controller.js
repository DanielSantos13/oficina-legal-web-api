const db = require('../config/db.config.js');
const Usuario = db.usuario;
const Mecanico = db.Mecanico;
const Cliente = db.Cliente;
//const Admin = db.admin;
const Gestor = db.Gestor;


// Post a Customer
exports.create = (req, res) => {
	let password = req.body.senha;
	const crypto = require('crypto')
	const alg = 'aes-256-ctr'
	const cipher = crypto.createCipher(alg, pwd)
	const crypted = cipher.update(password, 'utf8', 'hex')
	// Save to MySQL database
	Usuario.create({
		login: req.body.login,
		senha: crypted,
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
	let tipo = req.body.tipo;
	const crypto = require('crypto')
	const alg = 'aes-256-ctr'
	const cipher = crypto.createCipher(alg, pwd)
	const crypted = cipher.update(password, 'utf8', 'hex')

	Usuario.findAll({ where: { email: email } })
		.then(retorno => {
			if (retorno.senha === crypted) {
				switch (tipo) {
					// usuario cliente
					case '01':
						Cliente.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
						break;
					// usuario mecanico
					case '02':
						Mecanico.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
						break;
					// usuario gestor
					case '03':
						Gestor.findAll({ where: { idUsuario: retorno.idUsuario } }).then(output => { res.status(200).send(output) });
						break;
						// usuario admin
					case '04':

					default:
						res.status(400).send('error!');
				}
			}
			else {
				res.status(200).send("Login ou senha incorretos!")
			}
			;

		}).catch(err => res.send("Houve um erro inesperado"));
};