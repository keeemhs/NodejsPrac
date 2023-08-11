'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['developement'];
const db = {};

sequelize = new Sequelize(config.database, config.username, config.password, config);

// model
db.User = require('./User')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;