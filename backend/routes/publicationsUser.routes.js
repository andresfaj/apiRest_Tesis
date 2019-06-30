const express = require('express');
const router = express.Router();
const publicationControllerUser = require('../controllers/publicationsUser.controller');

router.get('/:user', publicationControllerUser.getPublicationsUser);

module.exports = router;