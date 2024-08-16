const Loan = require('../models/loan');
const BookService = require('./book-service');

class LoanService {
  static async createLoan(loanData) {
    const loan = await Loan.create(loanData);
    await BookService.updateBookAvailability(loan.BookId, false);
    return loan;
  }

  static async getLoansByBook(bookId) {
    return await Loan.findAll({ where: { BookId: bookId }, include: ['Book', 'Student'] });
  }

  static async getLoansByStudent(studentId) {
    return await Loan.findAll({ where: { StudentId: studentId }, include: ['Book', 'Student'] });
  }

  static async returnLoan(id) {
    const loan = await Loan.findByPk(id);
    if (loan) {
      await BookService.updateBookAvailability(loan.BookId, true);
      loan.returnDate = new Date();
      await loan.save();
    }
    return loan;
  }
}

module.exports = LoanService;
