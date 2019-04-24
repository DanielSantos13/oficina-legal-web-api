module.exports = function(router) {
    const usuario = require('../controller/usuario.controller.js');
 
    router.post('/api/usuario', usuario.auth)
    // Create a new Customer
    router.post('/api/usuario', usuario.create);
 
    // Retrieve all Customer
    router.get('/api/usuario', usuario.findAll);

    return router;
}