const Users = require('../../models/User.js');
const {sequelize} = require('../../../config/db.js');   

const createUser = async (userData) => {
    try{
        const newUser = await Users.create(userData);
        return newUser;
    } catch(error) {
        console.error('Error creating user:', error);
    }
};

const getAllUsers = async () => {
    try{
        const users = await Users.findAll();
        return users;
    } catch(error) {
        console.error('Error fetching users:', error);
    }
};


module.exports = {
    createUser,
    getAllUsers
}