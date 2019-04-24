module.exports = function(router) {
    const gestor = require('../controller/gestor.controller.js');

    //create uma nova gestor
    router.post('/api/gestor', gestor.create);
    //retrive todas as gestors
    router.get('/api/gestor', gestor.findAll);
    //retrive uma gestor por id
    router.get('/api/gestor/:idGestor' , gestor.findByPk);

    return router;

}