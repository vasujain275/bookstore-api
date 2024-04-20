import { Router } from "express";
import {
  addNewAuthor,
  deleteAuthor,
  getAuthors,
  getOneAuthor,
  updateAuthor,
} from "../controllers/authors.controller";

const authorRouter = Router();

authorRouter.route("/").get(getAuthors);
authorRouter.route("/:id").get(getOneAuthor);
authorRouter.route("/").post(addNewAuthor);
authorRouter.route("/:id").delete(deleteAuthor);
authorRouter.route("/:id").put(updateAuthor);

export { authorRouter };
