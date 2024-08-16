const express = require('express');
const loanController = require('../controllers/loan-controller');
const router = express.Router();

router.post('/loans', loanController.loanBook);
router.get('/loans/book/:bookId', loanController.listStudentsByBook);
router.get('/loans/student/:studentId', loanController.listBooksByStudent);
router.delete('/loans/:id', loanController.returnBook);

module.exports = router;
