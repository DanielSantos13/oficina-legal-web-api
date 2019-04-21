const db = require('../config/db.config');
const Oficina = db.oficina;

//post uma Oficina
exports.create = (req, res) => {
    Oficina.create({
        razaoSocial: req.body.razaoSocial,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro
    }).then(oficina => {
        res.status(201)
        res.send(oficina);
    });

};  

// FETCH todas as Oficinas
exports.findAll = (req, res) => {
    Oficina.findAll({
        }).then(oficina => {
            res.status(201)
            res.send(oficina)
        });
};

exports.findByPk = (req, res) => {
    Oficina.findByPk(req.params.idOficina)
    .then(oficina => {
        res.status(200)
        res.send(oficina)
    });
};

