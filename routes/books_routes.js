const express = require("express");

const booksController = require("../controllers/books_controller");

const router = express.Router();

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.get("/borrowed-books/:id/:bookId", booksController.getBorrowedBooks);
router.post("/", booksController.addNewBook);
router.post("/borrowed-books/:id", booksController.borrowBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router