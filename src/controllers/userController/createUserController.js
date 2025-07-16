const { createUser } = require('../../sequelizeControllers/userSequelizeControllers/userSequelizeController.js');


const createUserController = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json({
            code: 201,
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: 'Internal Server Error',
            data: null
        })
    }
}

module.exports = {
    createUserController
}