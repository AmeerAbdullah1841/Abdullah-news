const express = require("express");
const router = express.Router();
const newslistController = require("../controllers/newsListController");

router.post("/createAll", newslistController.createMultipleNewsItems);

router.get("/:category", newslistController.getNewsItemByCategory);

module.exports = router;
