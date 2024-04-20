import { Router } from "express";
import {
  addNewBook,
  getOneBook,
  getBooks,
  deleteBook,
} from "../controllers/books.controller";

const booksRouter = Router();

booksRouter.route("/").post(addNewBook);
booksRouter.route("/").get(getBooks);
booksRouter.route("/:id").get(getOneBook);
booksRouter.route("/:id").delete(deleteBook);

export { booksRouter };
