module.exports = function(router) {
    const cliente = require('../controller/cliente.controller.js');
 
    // Create a new Customer
    router.post('/api/cliente', cliente.create);
    // Retrieve all Customer
    router.get('/api/cliente', cliente.findAll);
    
    /* 
    // Retrieve a single Customer by Id
    router.get('/api/usuario/:idUsuario', clientefindByPk);
 
    // Update a Customer with Id
    router.put('/api/usuario/:idUsuario', clienteupdate); */
    

    return router;
}