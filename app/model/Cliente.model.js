module.exports = (sequelize, Sequelize) => {
	const Cliente = sequelize.define('Cliente', {
        nome: {
            type:Sequelize.STRING
        },
        cpf: {
            type:Sequelize.STRING
        },
        bairro: {
            type:Sequelize.STRING
        },
        cep: {
            type:Sequelize.STRING
        },
        endereco: {
            type:Sequelize.STRING
        },
        complemento: {
            type:Sequelize.STRING
        },
        idUsuario: {
            type:Sequelize.INTEGER
        }
    }, {
        freezeTableName: true,
        tablename: "Cliente",
        timestamps: false
    },
);
	return Cliente;
}













































