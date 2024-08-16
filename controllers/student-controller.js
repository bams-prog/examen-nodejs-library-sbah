const StudentService = require('../services/student-service');

exports.createStudent = async (req, res) => {
  try {
    const student = await StudentService.addStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add student' });
  }
};

exports.listStudents = async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

exports.findStudentById = async (req, res) => {
  try {
    const student = await StudentService.getStudentById(req.params.id);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
};
