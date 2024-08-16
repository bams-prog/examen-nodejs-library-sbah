const LoanService = require('../services/loan-service');

exports.loanBook = async (req, res) => {
  try {
    const loan = await LoanService.createLoan(req.body);
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to loan book' });
  }
};

exports.listStudentsByBook = async (req, res) => {
  try {
    const loans = await LoanService.getLoansByBook(req.params.bookId);
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loans' });
  }
};

exports.listBooksByStudent = async (req, res) => {
  try {
    const loans = await LoanService.getLoansByStudent(req.params.studentId);
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loans' });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const loan = await LoanService.returnLoan(req.params.id);
    if (loan) {
      res.status(200).json(loan);
    } else {
      res.status(404).json({ error: 'Loan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to return book' });
  }
};
