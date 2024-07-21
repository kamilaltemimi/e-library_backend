const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200'
}))

const usersRoutes = require("./routes/users_routes");
const booksRoutes = require("./routes/books_routes");
const ratingRoutes = require("./routes/rating_routes");

app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/rating", ratingRoutes);

app.listen(3000);
