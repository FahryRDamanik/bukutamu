const { DataTypes } = require("sequelize")

module.exports = function (connection) {
    class Session extends Model{}

    Session.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama_sesi: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize: connection,
        tableName: 'sesi',
        timestamps: false,
    });

    return Session;
}