import { Router } from "express";
import { addBooks, getOneBook, getbooks } from "../controllers/books.controller";

const booksRouter = Router();

booksRouter.route("/").post(addBooks);
booksRouter.route("/").get(getbooks);
booksRouter.route("/:id").get(getOneBook);

export { booksRouter };
