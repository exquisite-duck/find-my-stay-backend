const { DataTypes } = require('sequelize');
const { sequelizer } = require('../../config/db.js');   

const Room = sequelizer.define('Room', {
    room_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    size : DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.FLOAT
});