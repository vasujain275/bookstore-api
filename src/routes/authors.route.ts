import { Router } from "express";
import { getAuthors } from "../controllers/authors.controller";

const authorRouter = Router();

authorRouter.route("/").get(getAuthors);

export { authorRouter };
