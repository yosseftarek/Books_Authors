import express from "express";
import {
  addAuthor,
  deleteAuthor,
  filterAuthors,
  getAllAuthors,
  getAuthorWithHisBooks,
  getSpecificAuthor,
  updateAuthor,
} from "./author.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { addAuthorSchema, updateAuthorSchema } from "./author.validation.js";

const authorRouter = express.Router();

authorRouter
  .route("/")
  .post(validate(addAuthorSchema), addAuthor)
  .get(getAllAuthors);
authorRouter.get("/filter", filterAuthors);

authorRouter
  .route("/:id")
  .get(getSpecificAuthor)
  .patch(validate(updateAuthorSchema), updateAuthor)
  .delete(deleteAuthor);

authorRouter.get("/AuthorWithBooks/:id", getAuthorWithHisBooks);
export default authorRouter;
