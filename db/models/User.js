const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class User extends Model{}

    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING(250),
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
        },
        alamat: {
            type: DataTypes.TEXT,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: connection,
        tableName: 'user',
        timestamps: false,
    });
    return User;
}