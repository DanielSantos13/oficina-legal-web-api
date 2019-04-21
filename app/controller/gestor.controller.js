const db = require('../config/db.config.js');
const Gestor = db.gestor;
const Usuario = db.usuario;
const Oficina = db.oficina;

exports.create = (req, res) => {
    Usuario.create({
        login: req.body.usuario.login,
        senha: req.body.usuario.senha,
        email: req.body.usuario.email,
		ativo: req.body.usuario.ativo,
    }).then(usuario => {
        Gestor.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idUsuario: usuario.idUsuario,
            idOficina: req.body.oficina.idOficina
        }).then(gestor => {
            res.send(gestor)
        })
    })
}

 exports.findAll = (req , res) => {
    Gestor.findAll({
        attributes:["id","nome","cpf"],
        include:[{
            model:Usuario
        },{
            model:Oficina
        }]
    }).then(gestores => {
        res.send(gestores)
    });
}; 

exports.findByPk = (req, res) => {
    Gestor.findByPk(req.params.idGestor).then(gestor => {
        res.status(200)
        res.send(gestor)
    })
}
