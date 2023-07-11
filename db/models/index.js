const { Sequelize } = require("sequelize");
const UserFn = require("./User");
const GuessFn = require("./Guess");
const QueueFn = require("./Queue");
const SessionFn = require("./Session")

const connection = new Sequelize({
    database: 'bukutamu',
    username: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const User = UserFn(connection);
const Guess = GuessFn(connection);
const Queue = QueueFn(connection);
const Session = SessionFn(connection);

module.exports = {
    User,
    Guess,
    Queue,
    Session,
};