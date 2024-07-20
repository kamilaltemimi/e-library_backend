const database = require("../database");

exports.getAllReviews = (req, res) => {
    database.execute(
        "SELECT * FROM rating",
        (err, result) => {
            if (err) {
                res.status(500).send({ error: "An error has occurred while fetching ratings" });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.getRatingById = (req, res) => {
    const bookId = req.params.id;
    database.execute(
        "SELECT * FROM rating WHERE book_id = ?",
        [ bookId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: `An error has occurred while fetching book rating with id: ${bookId}` });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.addBookRating = (req, res) => {
    const { bookId, userId, rating, review } = req.body;
    database.execute(
        "INSERT INTO rating (book_id, user_id, rating, review) VALUES (?, ?, ?, ?)",
        [ bookId, userId, rating, review ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: "An error has occurred while adding book rating" });
            } else {
                res.status(200).send(result);
            }
        }
    );
};

exports.updateBookRating = (req, res) => {
    const ratingId = req.params.id;
    const { rating, review } = req.body;
    database.execute(
        "UPDATE rating SET rating = ?, review = ? WHERE rating_id = ?",
        [ rating, review, ratingId ],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: `An error has occurred while updating rating with id: ${ratingId}` });
            } else {
                res.status(200).send(result);
            }
        }
    );
};