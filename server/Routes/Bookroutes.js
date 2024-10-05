const express = require("express");
const {
  bookcreateController,
  bookGetController,
  updateController,
  DeleteBookController,
} = require("../Controller/bookController");
const BookRouter = express.Router();

BookRouter.post("/Create", bookcreateController);

BookRouter.get("/getAllbooks", bookGetController);

BookRouter.put("/updatebook/:isbn", updateController);

BookRouter.delete("/Delete/:isbn", DeleteBookController);

module.exports = BookRouter;
