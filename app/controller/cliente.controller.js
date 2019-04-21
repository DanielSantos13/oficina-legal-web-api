const db = require('../config/db.config.js');
const Usuario = db.usuario;
const Cliente = db.cliente;

exports.create = (req, res) => {	
	// Save to MySQL database
	Usuario.create({  
	    login: req.body.usuario.login,
        senha: req.body.usuario.senha,
        email: req.body.usuario.email,
		ativo: req.body.usuario.ativo,
	}).then(usuario => {		

        Cliente.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            bairro: req.body.bairro,
            cep: req.body.cep,
            endereco: req.body.endereco,
            complemento: req.body.complemento,
            idUsuario: usuario.idUsuario
        }).then(cliente => {
            res.send(cliente);
        })
	});
};

exports.findAll = (req, res) => {
	Cliente.findAll({

	}).then(cliente => {
		res.status(200)
	  res.send(cliente);
	});
};
