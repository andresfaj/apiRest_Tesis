const express = require('express');
const router = express.Router();
const publicationControlller = require('../controllers/publications.controller');

router.get('/homes', publicationControlller.getPublications);
router.get('/homes/:id', publicationControlller.getPublication);
router.post('/homes', publicationControlller.postPublication);
router.delete('/homes/:id',publicationControlller.deletePublication);
router.put('/homes/:id', publicationControlller.updatePublication);

module.exports = router;