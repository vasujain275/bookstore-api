import { Router } from "express";
import {
  addNewAuthor,
  deleteAuthor,
  getAuthors,
  getOneAuthor,
} from "../controllers/authors.controller";

const authorRouter = Router();

authorRouter.route("/").get(getAuthors);
authorRouter.route("/:id").get(getOneAuthor);
authorRouter.route("/").post(addNewAuthor);
authorRouter.route("/:id").delete(deleteAuthor);

export { authorRouter };
