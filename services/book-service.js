const Book = require('../models/book');

class BookService {
  static async addBook(bookData) {
    return await Book.create(bookData);
  }

  static async getAllBooks() {
    return await Book.findAll();
  }

  static async getBookById(id) {
    return await Book.findByPk(id);
  }

  static async getBooksByCategory(category) {
    return await Book.findAll({ where: { category } });
  }

  static async updateBookAvailability(id, available) {
    const book = await Book.findByPk(id);
    if (book) {
      book.available = available;
      await book.save();
    }
    return book;
  }
}

module.exports = BookService;
