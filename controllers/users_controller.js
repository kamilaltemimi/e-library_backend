const database = require("../database");

exports.getAllUsers = (req, res) => {
  database.execute(
    "SELECT * FROM users", 
    (err, result) => {
    if (err) {
      res.status(500).send({ error: "An error has occured while fetching users" });
    } else {
      res.status(200).send(result);
    }
  });
};

exports.getUserById = (req, res) => {
  const user_id = req.params.id;
  database.execute(
    "SELECT * FROM USERS WHERE user_id = ?", 
    [ user_id ], 
    (err, result) => {
    if (err) {
      res.status(500).send({error: `An error has occured while fetching user with id ${user_id}`});
    } else {
      res.status(200).send(result);
    }
  });
};

exports.addNewUser = (req, res) => {
  const { email, username, password } = req.body;
  database.execute(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [ email, username, password ],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: "An error has occured while adding a new user" });
      } else {
        res.status(200).send(result);
      }
    }
  );
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { email, username, password } = req.body;
  database.execute(
    'UPDATE users SET email = ?, username = ?, password = ? WHERE user_id = ?',
    [ email, username, password ],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: 'An error has occured while updating user' });
      } else {
        res.status(200).send(result);
      }
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  database.execute(
    "DELETE FROM users WHERE user_id = ?",
    [ id ],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: `An error has occurred while deleting user with id: ${id}` });
      } else {
        res.status(200).send(result);
      }
    }
  );
};