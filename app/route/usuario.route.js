module.exports = function(router) {
    const usuario = require('../controller/usuario.controller.js');
 
    // Create a new Customer
    router.post('/api/usuario', usuario.create);
 
    // Retrieve all Customer
    router.get('/api/usuario', usuario.findAll);
/*  
    // Retrieve a single Customer by Id
    router.get('/api/usuario/:idUsuario', usuario.findByPk);
 
    // Update a Customer with Id
    router.put('/api/usuario/:idUsuario', usuario.update);
 
    // Delete a Customer with Id
     */

    return router;
}