const database = require("../database");

exports.getAllBooks = (req, res) => {
    database.execute(
        "SELECT * FROM books",
        (err, result) => {
            if (err) {
                res.status(500).send({ error: "An error has occurred while fetching books" });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.getBookById = (req, res) => {
    const bookId = req.params.id;
    database.execute(
        "SELECT * FROM books WHERE book_id = ?",
        [ bookId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: `An error has occurred while fetching book with id ${bookId}` });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.borrowBook = (req, res) => {
    const id = req.params.userId
    const bookId = req.body.bookId
    database.execute(
        'INSERT INTO borrowed_books (user_id, book_id) VALUES (?, ?)',
        [ id, bookId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: 'An error has occurred while borrowing a book' })
            } else {
                res.status(200).send(result)
            }
        }
    );
};

exports.getBorrowedBooksByUser = (req, res) => {
    const id = req.params.id
    database.execute(
        'SELECT * FROM books JOIN borrowed_books ON books.book_id = borrowed_books.book_id WHERE borrowed_books.user_id = ?',
        [ id ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: 'An error has occured while fetching borrowed books'})
            } else {
                res.status(200).send(result)
            }
        }
    );
};

exports.returnBorrowedBook = (req, res) => {
    const userId = req.params.userId
    const bookId = req.params.bookId
    database.execute(
        "DELETE FROM borrowed_books WHERE user_id = ? AND book_id = ?",
        [ userId, bookId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: 'An error has occurred while returning a book'} )
            } else {
                res.status(200).send(result)
            }
        }
    );
};

exports.addNewBook = (req, res) => {
    const { title, author, description, publicationYear, addedBy, bookImage } = req.body;
    database.execute(
        "INSERT INTO books (title, author, description, publication_year, added_by, book_image) VALUES (?, ?, ?, ?, ?, ?)",
        [ title, author, description, publicationYear, addedBy, bookImage ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: "An error has occurred while adding book", err });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.updateBook = (req, res) => {
    const bookId = req.params.id;
    const { title, author, description, publicationYear, bookImage } = req.body;
    database.execute(
        "UPDATE books SET title = ?, author = ?, description = ?, publication_year = ?, book_image = ? WHERE book_id = ?",
        [ title, author, description, publicationYear, bookImage, bookId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: `An error has occurred while updating book with id: ${bookId}` })
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.deleteBook = (req, res) => {
    const id = req.params.id;
    database.execute(
      "DELETE FROM books WHERE book_id = ?",
      [ id ],
      (err, result) => {
        if (err) {
          res.status(500).send({ error: `An error has occurred while deleting book with id: ${id}` });
        } else {
          res.status(200).send(result);
        }
      }
    );
  };