const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const adminuserController = require('../controllers/adminUsers.controller');

/*
REST API: Enviar y recibir datos en formato json
*/

router.get('/:id', adminuserController.getUser);
router.post('/', adminuserController.createUser);
router.get('/', adminuserController.getUsers);
router.put('/:id', adminuserController.updateUser);
router.delete('/:id', adminuserController.deleteUser);

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



module.exports = router;