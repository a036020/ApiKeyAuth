const Sequelize = require('sequelize');
const database = require('../database/db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    apiKey: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    username: {
        type: Sequelize.STRING, //(200) posso colocar limite
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

//User.sync();

module.exports = User;