const express = require("express");

const usersController = require("../controllers/users_controller")

const router = express.Router()

router.get("/", usersController.getAllUsers)
router.get("/:id", usersController.getUserById)
router.post("/", usersController.addNewUser)
router.put("/:id", usersController.updateUser)

module.exports = router