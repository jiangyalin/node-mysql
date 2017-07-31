const Sequelize = require('sequelize');
const db = require('../lib/db');

let User = db.define('user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(50),
    pwd: Sequelize.STRING(50)
}, {
    timestamps: false
});

module.exports = User;