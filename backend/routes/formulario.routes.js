const express = require('express');
const router = express.Router();
const formularioController = require('../controllers/formulario.controller');

router.post('/emailsend',formularioController.sendMail);

module.exports = router;
