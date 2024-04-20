import { Router } from "express";
import {
  addNewBook,
  getOneBook,
  getBooks,
  deleteBook,
  updateBook,
} from "../controllers/books.controller";

const booksRouter = Router();

booksRouter.route("/").post(addNewBook);
booksRouter.route("/").get(getBooks);
booksRouter.route("/:id").get(getOneBook);
booksRouter.route("/:id").delete(deleteBook);
booksRouter.route("/:id").put(updateBook);

export { booksRouter };
