const BookService = require('../services/book-service');

exports.createBook = async (req, res) => {
  try {
    const book = await BookService.addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' });
  }
};

exports.listBooks = async (req, res) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

exports.findBookById = async (req, res) => {
  try {
    const book = await BookService.getBookById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

exports.findBooksByCategory = async (req, res) => {
  try {
    const books = await BookService.getBooksByCategory(req.params.category);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};
