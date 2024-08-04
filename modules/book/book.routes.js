import express from "express";
import {
  addBook,
  deleteBook,
  filterBooks,
  getAllBooks,
  getSpecificBook,
  updateBook,
} from "./book.controller.js";
import { addBookSchema, updateBookSchema } from "./book.validation.js";
import { validate } from "../../middlewares/validate.middleware.js";

const bookRouter = express.Router();

bookRouter.get('/filter',filterBooks)
bookRouter.route("/").post(validate(addBookSchema), addBook).get(getAllBooks);
bookRouter
  .route("/:id")
  .get(getSpecificBook)
  .patch(validate(updateBookSchema), updateBook)
  .delete(deleteBook);

export default bookRouter;
