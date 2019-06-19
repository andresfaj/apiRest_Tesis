const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require('../controllers/users.controller');

/*
REST API: Enviar y recibir datos en formato json
*/

router.post('/', userController.validateLogin);
//router.post('/', userController.createUser);

router.use((req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, req.app.get('jwtSecret'), (err, decoded) => {
            if(err){
                return res.json({
                    success: false,
                    message: 'La autenticación falló'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No existe un token'
        });
    }
});

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;