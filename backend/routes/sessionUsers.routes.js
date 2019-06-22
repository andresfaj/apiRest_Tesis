const express = require('express');
const router = express.Router();
const sessionuserController = require('../controllers/sessionUsers.controller');

// router.get('/signin', (req, res) => {
//     res.send('Ingresando a la app');
// });

// router.get('/signup', (req, res) => {
//     res.send('Formulario de autenticación');
// });

router.post('/login', sessionuserController.validateLogin);

module.exports = router;