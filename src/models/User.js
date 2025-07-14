const {DataTypes} = require('sequelize');
const {sequelizer} = require('../../config/db.js');

const User = sequelizer.define('User', {
  user_id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },
  email : DataTypes.STRING,
  phone_no : DataTypes.STRING,
  name : DataTypes.STRING 
});
