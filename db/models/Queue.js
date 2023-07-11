const { Model, DataTypes } = require("sequelize");

module.exports = function (connection) {
    class Queue extends Model{}

    Queue.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        no_antrian: {
            type: DataTypes.INTEGER,
        },
    }, {
        sequelize: connection,
        tableName: 'antrian',
        timestamps: false,
    });

    return Queue;
};