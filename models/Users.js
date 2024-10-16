module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		'Users',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true,
			},
			username: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			timestamps: true,
			paranoid: true,
			charset: 'utf8',
			collate: 'utf8_general_ci',
		}
	);

	return Users;
};
