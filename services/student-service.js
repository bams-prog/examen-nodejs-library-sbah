const Student = require('../models/student');

class StudentService {
  static async addStudent(studentData) {
    return await Student.create(studentData);
  }

  static async getAllStudents() {
    return await Student.findAll();
  }

  static async getStudentById(id) {
    return await Student.findByPk(id);
  }
}

module.exports = StudentService;
