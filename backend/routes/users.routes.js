const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.controller');
/*
REST API: Enviar y recibir datos en formato json
*/
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;