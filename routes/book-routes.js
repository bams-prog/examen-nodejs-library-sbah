const express = require('express');
const bookController = require('../controllers/book-controller');
const router = express.Router();

router.post('/books', bookController.createBook);
router.get('/books', bookController.listBooks);
router.get('/books/:id', bookController.findBookById);
router.get('/books/category/:category', bookController.findBooksByCategory);

module.exports = router;
