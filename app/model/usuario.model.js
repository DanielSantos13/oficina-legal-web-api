module.exports = (sequelize, Sequelize) => {
	const usuario = sequelize.define('usuario', {
	  login: {
		type: Sequelize.STRING
	  },
	  senha: {
		type: Sequelize.STRING
		},
		email: {
		type: Sequelize.STRING
		},
		ativo: {
		type: Sequelize.BOOLEAN
		},
		idUsuario: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
		}

	},
	{	
		timestamps: false,
		freezeTable: true, tableName: "Usuario"

	}
);
	return usuario;
}       