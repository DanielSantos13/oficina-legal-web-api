module.exports = (sequelize, Sequelize) => {
    const Oficina = sequelize.define('Oficina',{
        razaoSocial: {
            type: Sequelize.STRING
        },
        endereco: {
            type: Sequelize.STRING
        },
        complemento:{
            type: Sequelize.STRING
        },
        bairro: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        tablename: "Oficina",
        timestamps: false 
    });
    
    return Oficina;
}