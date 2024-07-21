const express = require("express");

const ratingController = require("../controllers/rating_controller");

const router = express.Router();

router.get("/", ratingController.getAllReviews);
router.get("/:id", ratingController.getRatingById);
router.post("/", ratingController.addBookRating);
router.put("/:id", ratingController.updateBookRating);
router.delete("/:id", ratingController.deleteRating);

module.exports = router