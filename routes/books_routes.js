const express = require("express");

const booksController = require("../controllers/books_controller");

const router = express.Router();

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.get("/borrowed-books/:id", booksController.getBorrowedBooksByUser);
router.post("/", booksController.addNewBook);
router.post("/borrowed-books/:userId", booksController.borrowBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
router.delete("/borrowed-books/:userId/:bookId", booksController.returnBorrowedBook);

module.exports = router