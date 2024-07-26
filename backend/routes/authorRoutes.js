const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor);
router.get('/:id', authorController.getAuthorById);
router.put('/:id', authorController.updateAuthorById);
router.delete('/:id', authorController.deleteAuthorById);

module.exports = router;

