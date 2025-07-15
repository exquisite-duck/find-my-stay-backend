const { DataTypes } = require('sequelize');
const { sequelizer } = require('../../config/db.js');

const Hotel = sequelizer.define('Hotel', {
    hotel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    email: DataTypes.STRING,  
});