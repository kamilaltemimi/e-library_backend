const express = require("express");

const booksController = require("../controllers/books_controller");

const router = express.Router();

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.addNewBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router