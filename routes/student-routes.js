const express = require('express');
const studentController = require('../controllers/student-controller');
const router = express.Router();

router.post('/students', studentController.createStudent);
router.get('/students', studentController.listStudents);
router.get('/students/:id', studentController.findStudentById);

module.exports = router;
