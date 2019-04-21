module.exports = function(router) {
    const oficina = require('../controller/oficina.contoller.js');

    //create uma nova oficina
    router.post('/api/oficina', oficina.create);
    //retrive todas as oficinas
    router.get('/api/oficina', oficina.findAll);
    //retrive uma oficina por id
    router.get('/api/oficina/:idOficina' , oficina.findByPk);

    return router;

}