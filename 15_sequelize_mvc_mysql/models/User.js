// User에 대한 테이블 정의
const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, // NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    });
    return model;
};

module.exports = User;