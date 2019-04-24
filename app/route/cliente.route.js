module.exports = function(router) {
    const cliente = require('../controller/cliente.controller.js');
 
    // Create a new Customer
    router.post('/api/cliente', cliente.create);
    // Retrieve all Customer
    router.get('/api/cliente', cliente.findAll);
    
    return router;
}