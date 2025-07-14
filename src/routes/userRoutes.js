const express = require('express');
const {
    createUserController,
    getAllUsersController
}
= require('../controllers/userController.js');
const router = express.Router();

router.post('/create', createUserController);
router.get('/getAll', getAllUsersController);

module.exports = router;