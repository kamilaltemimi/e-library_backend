const express = require("express");

const app = express();

app.use(express.json())

const usersRoutes = require("./routes/users_routes")

app.use("/users", usersRoutes)

app.listen(3000);
