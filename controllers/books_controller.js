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
    )
}

exports.addNewBook = (req, res) => {
    const { title, author, description, publicationYear, addedBy } = req.body;
    database.execute(
        "INSERT INTO books (title, author, description, publication_year, added_by) VALUES (?, ?, ?, ?, ?)",
        [ title, author, description, publicationYear, addedBy ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: "An error has occurred while adding book" });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.updateBook = (req, res) => {
    const bookId = req.params.id;
    const { title, author, description, publicationYear } = req.body;
    database.execute(
        "UPDATE books SET title = ?, author = ?, description = ?, publication_year = ? WHERE book_id = ?",
        [ title, author, description, publicationYear, bookId ],
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
      "DELETE FROM users WHERE book_id = ?",
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