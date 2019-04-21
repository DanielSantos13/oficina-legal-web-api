module.exports = (sequelize, Sequelize) => {
    const Gestor = sequelize.define('Gestor', {
        nome:{
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        idUsuario: {
            type: Sequelize.INTEGER
        },
        idOficina: {
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true,
        tablename: "Gestor",
        timestamps: false
    }
    );
    return Gestor;
};