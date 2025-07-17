const { getAllUsers } = require('../../sequelizeControllers/userSequelizeControllers/userSequelizeController.js');

const getAllUsersController = async (req, res) => {
    try {
        const getUsers = await getAllUsers();
        res.status(200).json({
            code: 200,
            message: 'Users fetched successfully',
            data: getUsers
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: 'Internal Server Error',
            data: null
        });
    }
};

module.exports = {
    getAllUsersController
};