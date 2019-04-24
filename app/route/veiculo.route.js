module.exports = function(router) {
    const veiculo = require('../controller/veiculo.controller.js');

    //create do veiculo
    router.post('/api/veiculo', veiculo.create);

    return router;
}