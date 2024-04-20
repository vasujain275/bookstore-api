import { Router } from "express";
import {
  addNewAuthor,
  getAuthors,
  getOneAuthor,
} from "../controllers/authors.controller";

const authorRouter = Router();

authorRouter.route("/").get(getAuthors);
authorRouter.route("/:id").get(getOneAuthor);
authorRouter.route("/").post(addNewAuthor);

export { authorRouter };
