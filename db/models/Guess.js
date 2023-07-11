const { Model, DataTypes } = require("sequelize");

module.exports = function (connection) {
    class Guess extends Model{}

    Guess.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        jenis_kelamin: {
            type: DataTypes.ENUM('pria','wanita')
        },
        alamat: {
            type: DataTypes.TEXT,
        },
        keperluan: {
            type: DataTypes.TEXT,
        },
        id_sesi: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'sesi'
                },
                key: 'id'
            },
        },
    },{
        sequelize: connection,
        tableName: 'tamu',
    });
    return Guess;
}