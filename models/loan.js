const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./book');
const Student = require('./student');

const Loan = sequelize.define('Loan', {
  loanDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  returnDate: {
    type: DataTypes.DATE,
  }
});

Loan.belongsTo(Book);
Loan.belongsTo(Student);

module.exports = Loan;
