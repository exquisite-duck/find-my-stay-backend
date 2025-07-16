const express = require('express');
const { createUserController }  = require('../controllers/userController/createUserController.js');
const { getAllUsersController } = require('../controllers/userController/getAllUserController.js');
const router = express.Router();

router.post('/create', createUserController);
router.get('/getAll', getAllUsersController);

module.exports = router;