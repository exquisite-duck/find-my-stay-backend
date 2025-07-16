const { DataTypes } = require('sequelize');
const sequelizer = require('../../config/db.js');

const Booking = sequelizer.define('Booking', {
    booking_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    booking_date : DataTypes.DATE,
    booking_price: DataTypes.DOUBLE
});