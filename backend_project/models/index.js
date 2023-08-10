'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델

// 관계형성

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
